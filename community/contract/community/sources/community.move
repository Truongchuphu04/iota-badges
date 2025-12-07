// Copyright (c) Mysten Labs, Inc.
// Modifications Copyright (c) 2024 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

/// IOTA Community Badges - Contribution Tracking and NFT Badge System
/// This module manages community contributions and mints NFT badges for verified contributions
module community::contract {
  use std::string::String;
  use iota::event;
  use iota::object::{Self, UID};
  use iota::tx_context::{Self, TxContext};
  use iota::transfer;

  /// Contribution Types
  const CONTRIBUTION_CODE: u8 = 0;
  const CONTRIBUTION_WRITING: u8 = 1;
  const CONTRIBUTION_SUPPORT: u8 = 2;
  const CONTRIBUTION_EVENT: u8 = 3;
  const CONTRIBUTION_DESIGN: u8 = 4;
  const CONTRIBUTION_TRANSLATION: u8 = 5;

  /// Badge Rarity Levels
  const RARITY_BRONZE: u8 = 0;
  const RARITY_SILVER: u8 = 1;
  const RARITY_GOLD: u8 = 2;
  const RARITY_DIAMOND: u8 = 3;
  const RARITY_LEGENDARY: u8 = 4;

  /// Badge NFT
  public struct Badge has key, store {
    id: UID,
    badge_id: u64,
    owner: address,
    contribution_type: u8,
    rarity: u8,
    title: String,
    description: String,
    points: u64,
    minted_at: u64,
  }

  /// Contribution Record
  public struct Contribution has key, store {
    id: UID,
    contributor: address,
    contribution_type: u8,
    title: String,
    description: String,
    link: String,
    status: u8, // 0 = pending, 1 = approved, 2 = rejected
    submitted_at: u64,
    reviewed_at: u64,
    points: u64,
  }

  /// Community Registry
  public struct CommunityRegistry has key {
    id: UID,
    admin: address,
    total_contributions: u64,
    total_badges: u64,
    badge_counter: u64,
  }

  /// Events
  public struct ContributionSubmitted has copy, drop {
    contribution_id: address,
    contributor: address,
    contribution_type: u8,
    points: u64,
  }

  public struct BadgeMinted has copy, drop {
    badge_id: u64,
    owner: address,
    contribution_type: u8,
    rarity: u8,
    points: u64,
  }

  /// Initialize the Community Registry
  public fun initialize_registry(ctx: &mut TxContext) {
    let registry = CommunityRegistry {
      id: object::new(ctx),
      admin: tx_context::sender(ctx),
      total_contributions: 0,
      total_badges: 0,
      badge_counter: 0,
    };
    transfer::share_object(registry);
  }

  /// Submit a contribution
  public fun submit_contribution(
    registry: &mut CommunityRegistry,
    contribution_type: u8,
    title: String,
    description: String,
    link: String,
    ctx: &mut TxContext
  ) {
    let points = get_points_for_type(contribution_type);
    
    let contribution = Contribution {
      id: object::new(ctx),
      contributor: tx_context::sender(ctx),
      contribution_type,
      title,
      description,
      link,
      status: 0, // pending
      submitted_at: tx_context::epoch(ctx),
      reviewed_at: 0,
      points,
    };

    let contributor = tx_context::sender(ctx);
    event::emit(ContributionSubmitted {
      contribution_id: object::id_address(&contribution),
      contributor,
      contribution_type,
      points,
    });

    registry.total_contributions = registry.total_contributions + 1;
    transfer::transfer(contribution, contributor);
  }

  /// Approve contribution and mint badge (admin only)
  public fun approve_contribution(
    registry: &mut CommunityRegistry,
    contribution: &mut Contribution,
    rarity: u8,
    ctx: &mut TxContext
  ) {
    assert!(tx_context::sender(ctx) == registry.admin, 1); // Only admin can approve
    assert!(contribution.status == 0, 2); // Must be pending

    contribution.status = 1; // approved
    contribution.reviewed_at = tx_context::epoch(ctx);

    // Mint badge
    let badge = Badge {
      id: object::new(ctx),
      badge_id: registry.badge_counter,
      owner: contribution.contributor,
      contribution_type: contribution.contribution_type,
      rarity,
      title: contribution.title,
      description: contribution.description,
      points: contribution.points,
      minted_at: tx_context::epoch(ctx),
    };

    registry.badge_counter = registry.badge_counter + 1;
    registry.total_badges = registry.total_badges + 1;

    event::emit(BadgeMinted {
      badge_id: registry.badge_counter - 1,
      owner: contribution.contributor,
      contribution_type: contribution.contribution_type,
      rarity,
      points: contribution.points,
    });

    transfer::transfer(badge, contribution.contributor);
  }

  /// Reject contribution (admin only)
  public fun reject_contribution(
    registry: &CommunityRegistry,
    contribution: &mut Contribution,
    ctx: &mut TxContext
  ) {
    assert!(tx_context::sender(ctx) == registry.admin, 1); // Only admin can reject
    assert!(contribution.status == 0, 2); // Must be pending

    contribution.status = 2; // rejected
    contribution.reviewed_at = tx_context::epoch(ctx);
  }

  /// Get points for contribution type
  fun get_points_for_type(contribution_type: u8): u64 {
    if (contribution_type == CONTRIBUTION_CODE) {
      100
    } else if (contribution_type == CONTRIBUTION_WRITING) {
      50
    } else if (contribution_type == CONTRIBUTION_SUPPORT) {
      30
    } else if (contribution_type == CONTRIBUTION_EVENT) {
      40
    } else if (contribution_type == CONTRIBUTION_DESIGN) {
      60
    } else if (contribution_type == CONTRIBUTION_TRANSLATION) {
      40
    } else {
      0
    }
  }
}

