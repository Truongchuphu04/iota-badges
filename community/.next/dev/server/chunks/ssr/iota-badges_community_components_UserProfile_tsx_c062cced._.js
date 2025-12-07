module.exports = [
"[project]/iota-badges/community/components/UserProfile.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const BADGE_RARITY_COLORS = {
    legendary: {
        bg: "from-yellow-600 to-orange-600",
        border: "border-yellow-500",
        glow: "shadow-yellow-500/50"
    },
    diamond: {
        bg: "from-cyan-600 to-blue-600",
        border: "border-cyan-500",
        glow: "shadow-cyan-500/50"
    },
    gold: {
        bg: "from-yellow-500 to-amber-500",
        border: "border-yellow-400",
        glow: "shadow-yellow-400/50"
    },
    silver: {
        bg: "from-gray-400 to-slate-400",
        border: "border-gray-300",
        glow: "shadow-gray-400/50"
    },
    bronze: {
        bg: "from-orange-600 to-red-600",
        border: "border-orange-500",
        glow: "shadow-orange-500/50"
    }
};
const CONTRIBUTION_ICONS = {
    code: "💻",
    writing: "✍️",
    support: "🤝",
    event: "🎯",
    design: "🎨",
    translation: "🌍"
};
// Mock user data
const MOCK_USER = {
    username: "Alice Developer",
    wallet: "0x1234567890abcdef1234567890abcdef12345678",
    totalPoints: 1250,
    totalContributions: 12,
    joinedDate: new Date("2024-03-15"),
    badges: [
        {
            id: "1",
            type: "code",
            rarity: "diamond",
            title: "Security Expert",
            description: "Fixed 5+ critical security issues",
            icon: "💻",
            mintedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
            points: 100
        },
        {
            id: "2",
            type: "writing",
            rarity: "gold",
            title: "Technical Writer",
            description: "Published 3 comprehensive tutorials",
            icon: "✍️",
            mintedAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000),
            points: 50
        },
        {
            id: "3",
            type: "support",
            rarity: "gold",
            title: "Community Helper",
            description: "Helped 20+ community members",
            icon: "🤝",
            mintedAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
            points: 30
        },
        {
            id: "4",
            type: "event",
            rarity: "silver",
            title: "Hackathon Participant",
            description: "Participated in IOTA Hackathon 2024",
            icon: "🎯",
            mintedAt: new Date(Date.now() - 75 * 24 * 60 * 60 * 1000),
            points: 40
        },
        {
            id: "5",
            type: "design",
            rarity: "gold",
            title: "Designer",
            description: "Created UI components for community",
            icon: "🎨",
            mintedAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
            points: 60
        },
        {
            id: "6",
            type: "code",
            rarity: "silver",
            title: "Bug Fixer",
            description: "Fixed 3 critical bugs",
            icon: "💻",
            mintedAt: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000),
            points: 100
        }
    ]
};
function UserProfile() {
    const [user] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(MOCK_USER);
    const [selectedBadge, setSelectedBadge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Group badges by rarity
    const badgesByRarity = {
        legendary: user.badges.filter((b)=>b.rarity === "legendary"),
        diamond: user.badges.filter((b)=>b.rarity === "diamond"),
        gold: user.badges.filter((b)=>b.rarity === "gold"),
        silver: user.badges.filter((b)=>b.rarity === "silver"),
        bronze: user.badges.filter((b)=>b.rarity === "bronze")
    };
    // Stats by contribution type
    const statsbyType = {
        code: user.badges.filter((b)=>b.type === "code").length,
        writing: user.badges.filter((b)=>b.type === "writing").length,
        support: user.badges.filter((b)=>b.type === "support").length,
        event: user.badges.filter((b)=>b.type === "event").length,
        design: user.badges.filter((b)=>b.type === "design").length,
        translation: user.badges.filter((b)=>b.type === "translation").length
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 p-4 sm:p-6 md:p-8 pt-20 sm:pt-24 md:pt-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "mb-6 px-4 py-2 bg-slate-700/50 hover:bg-slate-600 text-slate-300 font-semibold rounded-lg transition",
                    children: "← Back to Home"
                }, void 0, false, {
                    fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 sm:p-10 shadow-2xl mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-4xl sm:text-5xl mb-4",
                                                children: "👤"
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-3xl sm:text-4xl font-bold text-white mb-2",
                                                children: user.username
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400 text-sm font-mono bg-slate-700/50 px-4 py-2 rounded-lg inline-block",
                                                children: user.wallet
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-violet-500/10 border border-violet-500/30 rounded-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-xs font-semibold mb-1",
                                                        children: "TOTAL POINTS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: user.totalPoints
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-xs font-semibold mb-1",
                                                        children: "CONTRIBUTIONS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: user.totalContributions
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-xs font-semibold mb-1",
                                                        children: "BADGES EARNED"
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: user.badges.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-xs font-semibold mb-1",
                                                        children: "MEMBER SINCE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold text-white",
                                                        children: user.joinedDate.toLocaleDateString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-white mb-4",
                                        children: "Contribution Types"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: Object.entries(statsbyType).map(([type, count])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xl",
                                                                        children: CONTRIBUTION_ICONS[type]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                                        lineNumber: 191,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-white font-semibold capitalize",
                                                                        children: type
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                                lineNumber: 190,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-slate-400",
                                                                children: [
                                                                    count,
                                                                    " badge",
                                                                    count !== 1 ? "s" : ""
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                                lineNumber: 194,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full bg-slate-700/50 rounded-full h-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-gradient-to-r from-violet-500 to-indigo-500 h-2 rounded-full transition-all",
                                                            style: {
                                                                width: `${count / 6 * 100}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, type, true, {
                                                fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                lineNumber: 188,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-8",
                    children: [
                        "legendary",
                        "diamond",
                        "gold",
                        "silver",
                        "bronze"
                    ].map((rarity)=>badgesByRarity[rarity].length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl",
                                            children: [
                                                rarity === "legendary" && "🌟",
                                                rarity === "diamond" && "💎",
                                                rarity === "gold" && "🥇",
                                                rarity === "silver" && "🥈",
                                                rarity === "bronze" && "🥉"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                            lineNumber: 215,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-white capitalize",
                                            children: [
                                                rarity,
                                                " Badges (",
                                                badgesByRarity[rarity].length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                            lineNumber: 222,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                    lineNumber: 214,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                                    children: badgesByRarity[rarity].map((badge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedBadge(badge),
                                            className: `p-6 rounded-2xl border-2 transition-all transform hover:scale-105 cursor-pointer ${BADGE_RARITY_COLORS[rarity].bg} bg-opacity-10 ${BADGE_RARITY_COLORS[rarity].border} hover:shadow-2xl ${BADGE_RARITY_COLORS[rarity].glow}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-5xl mb-3 text-center",
                                                    children: badge.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-white text-center mb-2",
                                                    children: badge.title
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-300 text-center mb-3",
                                                    children: badge.description
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400",
                                                            children: [
                                                                "+",
                                                                badge.points,
                                                                " pts"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                            lineNumber: 236,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400",
                                                            children: badge.mintedAt.toLocaleDateString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, badge.id, true, {
                                            fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                            lineNumber: 227,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                    lineNumber: 225,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, rarity, true, {
                            fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                            lineNumber: 213,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                    lineNumber: 210,
                    columnNumber: 9
                }, this),
                selectedBadge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4",
                    onClick: ()=>setSelectedBadge(null),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `bg-gradient-to-br ${BADGE_RARITY_COLORS[selectedBadge.rarity].bg} bg-opacity-20 backdrop-blur-xl border-2 ${BADGE_RARITY_COLORS[selectedBadge.rarity].border} rounded-3xl p-8 max-w-md w-full`,
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-7xl mb-4",
                                        children: selectedBadge.icon
                                    }, void 0, false, {
                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                        lineNumber: 258,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl font-bold text-white mb-2",
                                        children: selectedBadge.title
                                    }, void 0, false, {
                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                        lineNumber: 259,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2",
                                        children: [
                                            selectedBadge.rarity,
                                            " Badge"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                        lineNumber: 260,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                lineNumber: 257,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 bg-slate-700/50 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400 text-xs font-semibold mb-1",
                                                children: "DESCRIPTION"
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                lineNumber: 267,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white",
                                                children: selectedBadge.description
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                lineNumber: 268,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                        lineNumber: 266,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-violet-500/10 border border-violet-500/30 rounded-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-xs font-semibold mb-1",
                                                        children: "POINTS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: [
                                                            "+",
                                                            selectedBadge.points
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                lineNumber: 272,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-xs font-semibold mb-1",
                                                        children: "TYPE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white font-bold capitalize",
                                                        children: selectedBadge.type
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                lineNumber: 277,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                        lineNumber: 271,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 bg-slate-700/50 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400 text-xs font-semibold mb-1",
                                                children: "MINTED ON"
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                lineNumber: 284,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white font-bold",
                                                children: selectedBadge.mintedAt.toLocaleString()
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                                lineNumber: 285,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                        lineNumber: 283,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                lineNumber: 265,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedBadge(null),
                                className: "w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                                lineNumber: 289,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                        lineNumber: 253,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
                    lineNumber: 249,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
            lineNumber: 141,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/iota-badges/community/components/UserProfile.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=iota-badges_community_components_UserProfile_tsx_c062cced._.js.map