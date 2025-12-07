module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/iota-badges/community/lib/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Network Configuration
 * 
 * Configure your IOTA networks and package IDs here
 */ __turbopack_context__.s([
    "DEVNET_PACKAGE_ID",
    ()=>DEVNET_PACKAGE_ID,
    "MAINNET_PACKAGE_ID",
    ()=>MAINNET_PACKAGE_ID,
    "TESTNET_PACKAGE_ID",
    ()=>TESTNET_PACKAGE_ID,
    "networkConfig",
    ()=>networkConfig,
    "useNetworkVariable",
    ()=>useNetworkVariable,
    "useNetworkVariables",
    ()=>useNetworkVariables
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$client$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/@iota/iota-sdk/dist/esm/client/network.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/@iota/dapp-kit/dist/esm/index.js [app-ssr] (ecmascript)");
;
;
const DEVNET_PACKAGE_ID = "0x1df4db6f2606b727f3e7b6f888812ffa8a10f46df749e68ba0038f164513baa1";
const TESTNET_PACKAGE_ID = "";
const MAINNET_PACKAGE_ID = "";
// Network configuration
const { networkConfig, useNetworkVariable, useNetworkVariables } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNetworkConfig"])({
    devnet: {
        url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$client$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFullnodeUrl"])("devnet"),
        variables: {
            packageId: DEVNET_PACKAGE_ID
        }
    },
    testnet: {
        url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$client$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFullnodeUrl"])("testnet"),
        variables: {
            packageId: TESTNET_PACKAGE_ID
        }
    },
    mainnet: {
        url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$client$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFullnodeUrl"])("mainnet"),
        variables: {
            packageId: MAINNET_PACKAGE_ID
        }
    }
});
;
}),
"[project]/iota-badges/community/components/Provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Provider",
    ()=>Provider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/@iota/dapp-kit/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/@radix-ui/themes/dist/esm/components/theme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/lib/config.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]();
function Provider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Theme"], {
        appearance: "dark",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
            client: queryClient,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IotaClientProvider"], {
                networks: __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["networkConfig"],
                defaultNetwork: "devnet",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletProvider"], {
                    autoConnect: true,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/iota-badges/community/components/Provider.tsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/iota-badges/community/components/Provider.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-badges/community/components/Provider.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/iota-badges/community/components/Provider.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/iota-badges/community/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Navbar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            href: "/",
            label: "🏠 Home",
            icon: "🏠"
        },
        {
            href: "/profile",
            label: "👤 Profile",
            icon: "👤"
        },
        {
            href: "/admin",
            label: "🛡️ Admin",
            icon: "🛡️"
        }
    ];
    const isActive = (href)=>pathname === href;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 right-0 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-b border-slate-700/50 z-40 shadow-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16 sm:h-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2 sm:gap-3 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-lg sm:text-xl font-bold text-white group-hover:shadow-lg group-hover:shadow-violet-500/50 transition-all",
                                    children: "🎁"
                                }, void 0, false, {
                                    fileName: "[project]/iota-badges/community/components/Navbar.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white font-bold text-sm sm:text-lg",
                                            children: "IOTA Badges"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-badges/community/components/Navbar.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 text-xs",
                                            children: "Community Contributions"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-badges/community/components/Navbar.tsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-badges/community/components/Navbar.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-badges/community/components/Navbar.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-2",
                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: `px-4 py-2 rounded-lg font-semibold transition-all ${isActive(item.href) ? "bg-violet-600 text-white shadow-lg shadow-violet-500/50" : "text-slate-300 hover:bg-slate-700/50 hover:text-white"}`,
                                    children: item.label
                                }, item.href, false, {
                                    fileName: "[project]/iota-badges/community/components/Navbar.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/iota-badges/community/components/Navbar.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                            className: "md:hidden p-2 rounded-lg hover:bg-slate-700/50 text-slate-300 hover:text-white transition",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M4 6h16M4 12h16M4 18h16"
                                }, void 0, false, {
                                    fileName: "[project]/iota-badges/community/components/Navbar.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/iota-badges/community/components/Navbar.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/iota-badges/community/components/Navbar.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/iota-badges/community/components/Navbar.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden pb-4 space-y-2 border-t border-slate-700/50 pt-4",
                    children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            onClick: ()=>setIsMobileMenuOpen(false),
                            className: `block px-4 py-3 rounded-lg font-semibold transition-all ${isActive(item.href) ? "bg-violet-600 text-white" : "text-slate-300 hover:bg-slate-700/50 hover:text-white"}`,
                            children: item.label
                        }, item.href, false, {
                            fileName: "[project]/iota-badges/community/components/Navbar.tsx",
                            lineNumber: 76,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/iota-badges/community/components/Navbar.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/iota-badges/community/components/Navbar.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/iota-badges/community/components/Navbar.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/iota-badges/community/lib/notification-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationProvider",
    ()=>NotificationProvider,
    "useNotification",
    ()=>useNotification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const NotificationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function NotificationProvider({ children }) {
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const showNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((title, message, type = "info", duration = 3000)=>{
        const id = Math.random().toString(36).substr(2, 9);
        const notification = {
            id,
            type,
            title,
            message,
            duration
        };
        setNotifications((prev)=>[
                ...prev,
                notification
            ]);
        if (duration) {
            setTimeout(()=>{
                removeNotification(id);
            }, duration);
        }
    }, []);
    const removeNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setNotifications((prev)=>prev.filter((n)=>n.id !== id));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationContext.Provider, {
        value: {
            notifications,
            showNotification,
            removeNotification
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/iota-badges/community/lib/notification-context.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
function useNotification() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(NotificationContext);
    if (!context) {
        throw new Error("useNotification must be used within NotificationProvider");
    }
    return context;
}
}),
"[project]/iota-badges/community/components/NotificationDisplay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotificationDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$lib$2f$notification$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/lib/notification-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
const notificationStyles = {
    success: {
        bg: "bg-green-500/10",
        border: "border-green-500/30",
        icon: "✅",
        title: "text-green-400"
    },
    error: {
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        icon: "❌",
        title: "text-red-400"
    },
    info: {
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        icon: "ℹ️",
        title: "text-blue-400"
    },
    warning: {
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30",
        icon: "⚠️",
        title: "text-yellow-400"
    }
};
function NotificationDisplay() {
    const { notifications, removeNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$lib$2f$notification$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotification"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-20 sm:top-24 right-4 sm:right-6 md:right-8 z-50 space-y-3 max-w-sm",
        children: notifications.map((notification)=>{
            const style = notificationStyles[notification.type];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${style.bg} ${style.border} border rounded-xl p-4 sm:p-5 backdrop-blur-xl shadow-lg animate-bounce`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl sm:text-2xl flex-shrink-0",
                            children: style.icon
                        }, void 0, false, {
                            fileName: "[project]/iota-badges/community/components/NotificationDisplay.tsx",
                            lineNumber: 49,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `font-bold ${style.title} text-sm sm:text-base`,
                                    children: notification.title
                                }, void 0, false, {
                                    fileName: "[project]/iota-badges/community/components/NotificationDisplay.tsx",
                                    lineNumber: 51,
                                    columnNumber: 17
                                }, this),
                                notification.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-300 text-xs sm:text-sm mt-1",
                                    children: notification.message
                                }, void 0, false, {
                                    fileName: "[project]/iota-badges/community/components/NotificationDisplay.tsx",
                                    lineNumber: 55,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-badges/community/components/NotificationDisplay.tsx",
                            lineNumber: 50,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>removeNotification(notification.id),
                            className: "text-slate-400 hover:text-slate-200 flex-shrink-0",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/iota-badges/community/components/NotificationDisplay.tsx",
                            lineNumber: 60,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/iota-badges/community/components/NotificationDisplay.tsx",
                    lineNumber: 48,
                    columnNumber: 13
                }, this)
            }, notification.id, false, {
                fileName: "[project]/iota-badges/community/components/NotificationDisplay.tsx",
                lineNumber: 44,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/iota-badges/community/components/NotificationDisplay.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__da3515e1._.js.map