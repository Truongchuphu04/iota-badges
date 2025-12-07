(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/iota-badges/community/components/AdminDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$lib$2f$notification$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/lib/notification-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const CONTRIBUTION_ICONS = {
    code: "💻",
    writing: "✍️",
    support: "🤝",
    event: "🎯",
    design: "🎨",
    translation: "🌍"
};
const STATUS_COLORS = {
    pending: {
        bg: "bg-yellow-500/10",
        text: "text-yellow-400",
        border: "border-yellow-500/30"
    },
    approved: {
        bg: "bg-green-500/10",
        text: "text-green-400",
        border: "border-green-500/30"
    },
    rejected: {
        bg: "bg-red-500/10",
        text: "text-red-400",
        border: "border-red-500/30"
    }
};
// Mock data
const MOCK_CONTRIBUTIONS = [
    {
        id: "1",
        username: "Alice Dev",
        wallet: "0x1234...5678",
        type: "code",
        title: "Fixed critical security bug",
        description: "Patched XSS vulnerability in auth module",
        link: "https://github.com/iota/repo/pull/123",
        status: "pending",
        submittedAt: new Date(Date.now() - 2 * 60 * 60 * 1000)
    },
    {
        id: "2",
        username: "Bob Writer",
        wallet: "0x9876...4321",
        type: "writing",
        title: "Advanced IOTA Tutorial",
        description: "Comprehensive guide on building dApps with IOTA SDK",
        link: "https://medium.com/iota-tutorial",
        status: "approved",
        submittedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
        reviewedAt: new Date(Date.now() - 1 * 60 * 60 * 1000)
    },
    {
        id: "3",
        username: "Charlie Support",
        wallet: "0x5555...6666",
        type: "support",
        title: "Helped 5 community members",
        description: "Answered questions in Discord and helped debug issues",
        status: "approved",
        submittedAt: new Date(Date.now() - 10 * 60 * 60 * 1000),
        reviewedAt: new Date(Date.now() - 8 * 60 * 60 * 1000)
    },
    {
        id: "4",
        username: "Diana Designer",
        wallet: "0x7777...8888",
        type: "design",
        title: "UI Kit for IOTA Community",
        description: "Created comprehensive design system for community projects",
        link: "https://figma.com/iota-design",
        status: "pending",
        submittedAt: new Date(Date.now() - 1 * 60 * 60 * 1000)
    },
    {
        id: "5",
        username: "Eve Event",
        wallet: "0x9999...0000",
        type: "event",
        title: "Organized IOTA Hackathon",
        description: "Successfully organized and managed 3-day hackathon with 50+ participants",
        status: "rejected",
        submittedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
        reviewedAt: new Date(Date.now() - 20 * 60 * 60 * 1000)
    }
];
function AdminDashboard() {
    _s();
    const { showNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$lib$2f$notification$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"])();
    const [contributions, setContributions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(MOCK_CONTRIBUTIONS);
    const [selectedFilter, setSelectedFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedContribution, setSelectedContribution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const filteredContributions = selectedFilter === "all" ? contributions : contributions.filter((c)=>c.status === selectedFilter);
    const handleApprove = (id)=>{
        setContributions(contributions.map((c)=>c.id === id ? {
                ...c,
                status: "approved",
                reviewedAt: new Date()
            } : c));
        showNotification("Badge Approved!", "The contribution has been approved and badge has been minted.", "success", 4000);
        setSelectedContribution(null);
    };
    const handleReject = (id)=>{
        setContributions(contributions.map((c)=>c.id === id ? {
                ...c,
                status: "rejected",
                reviewedAt: new Date()
            } : c));
        showNotification("Contribution Rejected", "The contribution has been marked as rejected.", "warning", 4000);
        setSelectedContribution(null);
    };
    const stats = {
        total: contributions.length,
        pending: contributions.filter((c)=>c.status === "pending").length,
        approved: contributions.filter((c)=>c.status === "approved").length,
        rejected: contributions.filter((c)=>c.status === "rejected").length
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 p-4 sm:p-6 md:p-8 pt-20 sm:pt-24 md:pt-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-3xl",
                                    children: "🛡️"
                                }, void 0, false, {
                                    fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl sm:text-5xl font-bold text-white",
                                    children: "Admin Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-400 ml-12",
                            children: "Review and approve community contributions"
                        }, void 0, false, {
                            fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8",
                    children: [
                        {
                            label: "Total",
                            value: stats.total,
                            color: "from-blue-500 to-cyan-500"
                        },
                        {
                            label: "Pending",
                            value: stats.pending,
                            color: "from-yellow-500 to-orange-500"
                        },
                        {
                            label: "Approved",
                            value: stats.approved,
                            color: "from-green-500 to-emerald-500"
                        },
                        {
                            label: "Rejected",
                            value: stats.rejected,
                            color: "from-red-500 to-pink-500"
                        }
                    ].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-4 sm:p-6 bg-gradient-to-br ${stat.color} bg-opacity-10 border border-slate-700 rounded-2xl`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 text-sm font-semibold mb-1",
                                    children: stat.label
                                }, void 0, false, {
                                    fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl sm:text-3xl font-bold text-white",
                                    children: stat.value
                                }, void 0, false, {
                                    fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, stat.label, true, {
                            fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 shadow-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6 flex gap-2 overflow-x-auto pb-2",
                                        children: [
                                            "all",
                                            "pending",
                                            "approved",
                                            "rejected"
                                        ].map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedFilter(status),
                                                className: `px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${selectedFilter === status ? "bg-violet-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"}`,
                                                children: status === "all" ? "All" : status.charAt(0).toUpperCase() + status.slice(1)
                                            }, status, false, {
                                                fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 max-h-[600px] overflow-y-auto",
                                        children: filteredContributions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-8 text-center text-slate-400",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg",
                                                children: "No contributions found"
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                lineNumber: 195,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                            lineNumber: 194,
                                            columnNumber: 19
                                        }, this) : filteredContributions.map((contribution)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedContribution(contribution),
                                                className: `w-full p-4 rounded-xl border-2 transition-all text-left ${selectedContribution?.id === contribution.id ? "border-violet-500 bg-violet-500/10" : "border-slate-600 hover:border-slate-500 bg-slate-700/30"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-2xl",
                                                                        children: CONTRIBUTION_ICONS[contribution.type]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                                        lineNumber: 210,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-bold text-white",
                                                                                children: contribution.username
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                                                lineNumber: 212,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-slate-400",
                                                                                children: contribution.wallet
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                                                lineNumber: 213,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                                        lineNumber: 211,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `px-3 py-1 rounded-full text-xs font-bold ${STATUS_COLORS[contribution.status].bg} ${STATUS_COLORS[contribution.status].text} border ${STATUS_COLORS[contribution.status].border}`,
                                                                children: [
                                                                    contribution.status === "pending" && "⏳",
                                                                    contribution.status === "approved" && "✅",
                                                                    contribution.status === "rejected" && "❌",
                                                                    " " + contribution.status.charAt(0).toUpperCase() + contribution.status.slice(1)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                                lineNumber: 216,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-white mb-1 truncate",
                                                        children: contribution.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-400",
                                                        children: new Date(contribution.submittedAt).toLocaleDateString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, contribution.id, true, {
                                                fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                lineNumber: 199,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-1",
                            children: selectedContribution ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 shadow-2xl sticky top-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-white mb-4",
                                        children: "Review Contribution"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                        lineNumber: 242,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-xs font-semibold mb-1",
                                                        children: "TYPE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white font-bold",
                                                        children: [
                                                            CONTRIBUTION_ICONS[selectedContribution.type],
                                                            " ",
                                                            selectedContribution.type.toUpperCase()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                lineNumber: 246,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-xs font-semibold mb-1",
                                                        children: "TITLE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white font-bold",
                                                        children: selectedContribution.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                lineNumber: 253,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-xs font-semibold mb-1",
                                                        children: "DESCRIPTION"
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-300 text-sm",
                                                        children: selectedContribution.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                lineNumber: 258,
                                                columnNumber: 19
                                            }, this),
                                            selectedContribution.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-xs font-semibold mb-1",
                                                        children: "REFERENCE LINK"
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                        lineNumber: 265,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: selectedContribution.link,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "text-violet-400 hover:text-violet-300 text-sm truncate",
                                                        children: selectedContribution.link
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                lineNumber: 264,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-xs font-semibold mb-1",
                                                        children: "SUBMITTED"
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-300 text-sm",
                                                        children: new Date(selectedContribution.submittedAt).toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                lineNumber: 277,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                        lineNumber: 245,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-3 rounded-xl mb-6 border ${STATUS_COLORS[selectedContribution.status].bg} ${STATUS_COLORS[selectedContribution.status].border}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-sm font-bold ${STATUS_COLORS[selectedContribution.status].text}`,
                                            children: [
                                                selectedContribution.status === "pending" && "⏳ Awaiting Review",
                                                selectedContribution.status === "approved" && "✅ Approved - Badge Minted",
                                                selectedContribution.status === "rejected" && "❌ Rejected"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                            lineNumber: 291,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                        lineNumber: 286,
                                        columnNumber: 17
                                    }, this),
                                    selectedContribution.status === "pending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleApprove(selectedContribution.id),
                                                className: "w-full px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-xl transition-all transform hover:scale-105",
                                                children: "✅ Approve & Mint Badge"
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                lineNumber: 301,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleReject(selectedContribution.id),
                                                className: "w-full px-4 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all transform hover:scale-105",
                                                children: "❌ Reject"
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                lineNumber: 307,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                        lineNumber: 300,
                                        columnNumber: 19
                                    }, this),
                                    selectedContribution.status !== "pending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 bg-slate-700/50 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400 mb-1",
                                                children: "REVIEWED"
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                lineNumber: 318,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white font-semibold",
                                                children: selectedContribution.reviewedAt?.toLocaleString()
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                                lineNumber: 319,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                        lineNumber: 317,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                lineNumber: 241,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl mb-2",
                                        children: "📋"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                        lineNumber: 327,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400",
                                        children: "Select a contribution to review"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                        lineNumber: 328,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                                lineNumber: 326,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
            lineNumber: 145,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/iota-badges/community/components/AdminDashboard.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_s(AdminDashboard, "DLF8ZDDAUo8tC16d6vtGd5cb46o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$lib$2f$notification$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"]
    ];
});
_c = AdminDashboard;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=iota-badges_community_components_AdminDashboard_tsx_221f0615._.js.map