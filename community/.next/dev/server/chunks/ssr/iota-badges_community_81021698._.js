module.exports = [
"[project]/iota-badges/community/components/Wallet-connect.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletConnect",
    ()=>WalletConnect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/@iota/dapp-kit/dist/esm/index.js [app-ssr] (ecmascript)");
"use client";
;
;
function WalletConnect() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectButton"], {}, void 0, false, {
            fileName: "[project]/iota-badges/community/components/Wallet-connect.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/iota-badges/community/components/Wallet-connect.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/iota-badges/community/hooks/useContract.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTRACT_METHODS",
    ()=>CONTRACT_METHODS,
    "CONTRACT_MODULE",
    ()=>CONTRACT_MODULE,
    "useContract",
    ()=>useContract
]);
/**
 * ============================================================================
 * IOTA CONTRACT INTEGRATION HOOK
 * ============================================================================
 * 
 * This hook contains ALL the contract interaction logic.
 * 
 * To customize your dApp, modify the configuration section below.
 * 
 * ============================================================================
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/@iota/dapp-kit/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/@iota/iota-sdk/dist/esm/transactions/Transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/lib/config.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const CONTRACT_MODULE = "contract" // Your Move module name
;
const CONTRACT_METHODS = {
    CREATE: "create",
    INCREMENT: "increment",
    SET_VALUE: "set_value"
};
// ============================================================================
// DATA EXTRACTION
// ============================================================================
// Modify this to extract data from your contract's object structure
function getObjectFields(data) {
    if (data.content?.dataType !== "moveObject") {
        console.log("Data is not a moveObject:", data.content?.dataType);
        return null;
    }
    const fields = data.content.fields;
    if (!fields) {
        console.log("No fields found in object data");
        return null;
    }
    // Log the actual structure for debugging
    console.log("Object fields structure:", JSON.stringify(fields, null, 2));
    // Handle value - it might be a string (u64) or number
    let value;
    if (typeof fields.value === "string") {
        value = parseInt(fields.value, 10);
        if (isNaN(value)) {
            console.log("Value is not a valid number:", fields.value);
            return null;
        }
    } else if (typeof fields.value === "number") {
        value = fields.value;
    } else {
        console.log("Value is not a number or string:", typeof fields.value, fields.value);
        return null;
    }
    // Handle owner - convert to string
    if (!fields.owner) {
        console.log("Owner field is missing");
        return null;
    }
    const owner = String(fields.owner);
    return {
        value,
        owner
    };
}
const useContract = ()=>{
    const currentAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentAccount"])();
    const address = currentAccount?.address;
    const packageId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNetworkVariable"])("packageId");
    const iotaClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIotaClient"])();
    const { mutate: signAndExecute, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSignAndExecuteTransaction"])();
    const [objectId, setObjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hash, setHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [transactionError, setTransactionError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Load object ID from URL hash
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    // Fetch object data
    const { data, isPending: isFetching, error: queryError, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIotaClientQuery"])("getObject", {
        id: objectId,
        options: {
            showContent: true,
            showOwner: true
        }
    }, {
        enabled: !!objectId
    });
    // Extract fields
    const fields = data?.data ? getObjectFields(data.data) : null;
    const isOwner = fields?.owner.toLowerCase() === address?.toLowerCase();
    // Check if object exists but data extraction failed
    const objectExists = !!data?.data;
    const hasValidData = !!fields;
    // Create object
    const createObject = async ()=>{
        if (!packageId) return;
        try {
            setIsLoading(true);
            setTransactionError(null);
            setHash(undefined);
            const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transaction"]();
            tx.moveCall({
                arguments: [],
                target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.CREATE}`
            });
            signAndExecute({
                transaction: tx
            }, {
                onSuccess: async ({ digest })=>{
                    setHash(digest);
                    try {
                        const { effects } = await iotaClient.waitForTransaction({
                            digest,
                            options: {
                                showEffects: true
                            }
                        });
                        const newObjectId = effects?.created?.[0]?.reference?.objectId;
                        if (newObjectId) {
                            setObjectId(newObjectId);
                            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                            ;
                            // Reset loading - the query will handle its own loading state
                            setIsLoading(false);
                        } else {
                            setIsLoading(false);
                            console.warn("No object ID found in transaction effects");
                        }
                    } catch (waitError) {
                        console.error("Error waiting for transaction:", waitError);
                        setIsLoading(false);
                    }
                },
                onError: (err)=>{
                    const error = err instanceof Error ? err : new Error(String(err));
                    setTransactionError(error);
                    console.error("Error:", err);
                    setIsLoading(false);
                }
            });
        } catch (err) {
            const error = err instanceof Error ? err : new Error(String(err));
            setTransactionError(error);
            console.error("Error creating object:", err);
            setIsLoading(false);
        }
    };
    // Increment
    const increment = async ()=>{
        if (!objectId || !packageId) return;
        try {
            setIsLoading(true);
            setTransactionError(null);
            const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transaction"]();
            tx.moveCall({
                arguments: [
                    tx.object(objectId)
                ],
                target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.INCREMENT}`
            });
            signAndExecute({
                transaction: tx
            }, {
                onSuccess: async ({ digest })=>{
                    setHash(digest);
                    await iotaClient.waitForTransaction({
                        digest
                    });
                    await refetch();
                    setIsLoading(false);
                },
                onError: (err)=>{
                    const error = err instanceof Error ? err : new Error(String(err));
                    setTransactionError(error);
                    console.error("Error:", err);
                    setIsLoading(false);
                }
            });
        } catch (err) {
            const error = err instanceof Error ? err : new Error(String(err));
            setTransactionError(error);
            console.error("Error incrementing:", err);
            setIsLoading(false);
        }
    };
    // Reset
    const reset = async ()=>{
        if (!objectId || !packageId) return;
        try {
            setIsLoading(true);
            setTransactionError(null);
            const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transaction"]();
            tx.moveCall({
                arguments: [
                    tx.object(objectId),
                    tx.pure.u64(0)
                ],
                target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.SET_VALUE}`
            });
            signAndExecute({
                transaction: tx
            }, {
                onSuccess: async ({ digest })=>{
                    setHash(digest);
                    await iotaClient.waitForTransaction({
                        digest
                    });
                    await refetch();
                    setIsLoading(false);
                },
                onError: (err)=>{
                    const error = err instanceof Error ? err : new Error(String(err));
                    setTransactionError(error);
                    console.error("Error:", err);
                    setIsLoading(false);
                }
            });
        } catch (err) {
            const error = err instanceof Error ? err : new Error(String(err));
            setTransactionError(error);
            console.error("Error resetting:", err);
            setIsLoading(false);
        }
    };
    const contractData = fields ? {
        value: fields.value,
        owner: fields.owner
    } : null;
    const clearObject = ()=>{
        setObjectId(null);
        setTransactionError(null);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    const actions = {
        createObject,
        increment,
        reset,
        clearObject
    };
    const contractState = {
        isLoading: isLoading && !objectId || isPending || isFetching,
        isPending,
        isConfirming: false,
        isConfirmed: !!hash && !isLoading && !isPending,
        hash,
        error: queryError || transactionError
    };
    return {
        data: contractData,
        actions,
        state: contractState,
        objectId,
        isOwner,
        objectExists,
        hasValidData
    };
};
}),
"[project]/iota-badges/community/components/MintBoard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MintBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$hooks$2f$useContract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/hooks/useContract.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/@iota/dapp-kit/dist/esm/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function MintBoard() {
    const currentAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentAccount"])();
    const { data, actions, state, objectId, isOwner, objectExists, hasValidData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$hooks$2f$useContract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContract"])();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const copyToClipboard = (text)=>{
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    if (!currentAccount) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-md w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 animate-bounce",
                        style: {
                            animationDuration: '3s'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 rounded-3xl shadow-2xl shadow-purple-500/50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-7xl",
                                children: "🏅"
                            }, void 0, false, {
                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                lineNumber: 24,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                            lineNumber: 23,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl font-black text-white mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-200 to-indigo-200",
                        children: "Community Badges"
                    }, void 0, false, {
                        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-slate-300 mb-8 leading-relaxed",
                        children: "Connect your wallet to mint and manage community badges on IOTA"
                    }, void 0, false, {
                        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block px-8 py-3 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 rounded-xl border border-violet-500/30 backdrop-blur",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-300",
                            children: "👈 Click the wallet button in the top-right to connect"
                        }, void 0, false, {
                            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 p-4 sm:p-6 md:p-8 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 sm:mb-10 md:mb-12 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-block mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl shadow-lg shadow-violet-500/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-3xl",
                                    children: "🏅"
                                }, void 0, false, {
                                    fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl sm:text-5xl md:text-6xl font-black text-white mb-3 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-200 to-indigo-200",
                            children: "Community Badges"
                        }, void 0, false, {
                            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base sm:text-lg text-slate-300 max-w-2xl mx-auto",
                            children: "Mint and manage your IOTA community badges with elegant design and smooth interactions"
                        }, void 0, false, {
                            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-5 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 sm:p-10 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300",
                                children: !objectId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center justify-center min-h-80 sm:min-h-96",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-8 p-12 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-slate-700/50 rounded-3xl animate-pulse",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-8xl block",
                                                children: "🎖️"
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                lineNumber: 59,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                            lineNumber: 58,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl sm:text-3xl font-bold text-white mb-3 text-center",
                                            children: "Ready to Earn Badges?"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                            lineNumber: 61,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 text-center mb-8 max-w-xs leading-relaxed",
                                            children: "Create your first community badge and start earning points with your community"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                            lineNumber: 62,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: actions.createObject,
                                            disabled: state.isPending,
                                            className: "px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-violet-500/50 text-base sm:text-lg shadow-lg",
                                            children: state.isPending ? "🔄 Creating..." : "🚀 Mint Badge"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                            lineNumber: 63,
                                            columnNumber: 19
                                        }, this),
                                        state.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm w-full max-w-md",
                                            children: state.error?.message || String(state.error)
                                        }, void 0, false, {
                                            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                            lineNumber: 71,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                    lineNumber: 57,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: state.isLoading && !data ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center justify-center min-h-80 sm:min-h-96",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6 inline-block",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "inline-block p-4 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-full animate-spin shadow-lg shadow-violet-500/50",
                                                        style: {
                                                            animationDuration: '2s'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-10 bg-slate-900 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-300 font-semibold text-lg",
                                                    children: "Minting your badge..."
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-sm mt-2",
                                                    children: "Please wait while we create your badge on the blockchain"
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                            lineNumber: 80,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                        lineNumber: 79,
                                        columnNumber: 21
                                    }, this) : state.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 sm:p-6 bg-red-500/20 border border-red-500 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-red-200 font-semibold mb-2 text-sm sm:text-base",
                                                children: "Error loading badge"
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                lineNumber: 92,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-red-100/70 text-xs sm:text-sm mb-4",
                                                children: state.error.message || "Badge not found"
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                lineNumber: 93,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: actions.clearObject,
                                                className: "px-3 sm:px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors",
                                                children: "Clear & Create New"
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                lineNumber: 94,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                        lineNumber: 91,
                                        columnNumber: 21
                                    }, this) : objectExists && !hasValidData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 sm:p-6 bg-yellow-500/20 border border-yellow-500 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-yellow-200 text-sm sm:text-base",
                                            children: "Object found but data is invalid"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                            lineNumber: 103,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                        lineNumber: 102,
                                        columnNumber: 21
                                    }, this) : data ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-8 sm:p-10 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-slate-600/50 rounded-3xl backdrop-blur hover:border-slate-500/80 transition-all",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row items-center gap-6 sm:gap-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative flex-shrink-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-violet-500/50 hover:shadow-violet-500/70 transition-all hover:scale-105",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-7xl sm:text-8xl",
                                                                        children: "🏅"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                                        lineNumber: 112,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 px-4 sm:px-5 py-2 rounded-full font-bold text-sm sm:text-base text-slate-900 shadow-lg",
                                                                    children: [
                                                                        "⭐ ",
                                                                        data.value,
                                                                        " pts"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                                    lineNumber: 114,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 text-center sm:text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "text-3xl sm:text-4xl font-bold text-white mb-2",
                                                                    children: "Your Badge"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                                    lineNumber: 119,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-slate-300 text-base sm:text-lg mb-6 leading-relaxed",
                                                                    children: "Your community badge is active on the IOTA blockchain and ready to earn!"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                                    lineNumber: 120,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col sm:flex-row sm:items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-slate-400 text-sm",
                                                                                children: "Badge ID:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                                                lineNumber: 123,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                                className: "text-xs bg-slate-700/50 px-4 py-2 rounded-lg text-slate-200 font-mono break-all border border-slate-600 hover:bg-slate-700 transition",
                                                                                children: [
                                                                                    objectId?.slice(0, 20),
                                                                                    "..."
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                                                lineNumber: 124,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>copyToClipboard(objectId),
                                                                                className: "text-xs px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 transition whitespace-nowrap",
                                                                                children: copied ? "✓ Copied" : "Copy ID"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                                                lineNumber: 125,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                                        lineNumber: 122,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                                    lineNumber: 121,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                lineNumber: 108,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 sm:grid-cols-3 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 sm:p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-violet-500/30 transition",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-400 text-xs font-semibold mb-2",
                                                                children: "POINTS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-3xl sm:text-4xl font-bold text-white",
                                                                children: data.value
                                                            }, void 0, false, {
                                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 sm:p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-indigo-500/30 transition",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-400 text-xs font-semibold mb-2",
                                                                children: "STATUS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-lg sm:text-xl font-bold text-green-400",
                                                                children: "Active ✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 sm:p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-yellow-500/30 transition",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-400 text-xs font-semibold mb-2",
                                                                children: "OWNER"
                                                            }, void 0, false, {
                                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-yellow-400",
                                                                children: isOwner ? "👑 You" : "Other"
                                                            }, void 0, false, {
                                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                                lineNumber: 146,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                lineNumber: 135,
                                                columnNumber: 23
                                            }, this),
                                            state.hash && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-5 sm:p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-green-500/30 transition",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xl mt-1",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-slate-400 text-sm font-semibold mb-2",
                                                                    children: "TRANSACTION CONFIRMED"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                    className: "text-xs block text-slate-300 font-mono break-all bg-slate-900/50 p-2 rounded border border-slate-600",
                                                                    children: state.hash
                                                                }, void 0, false, {
                                                                    fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                                    lineNumber: 157,
                                                                    columnNumber: 31
                                                                }, this),
                                                                state.isConfirmed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-green-400 text-xs font-semibold mt-2",
                                                                    children: "Blockchain confirmed ✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                lineNumber: 152,
                                                columnNumber: 25
                                            }, this),
                                            state.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-5 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm",
                                                children: state.error?.message || String(state.error)
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                lineNumber: 167,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                        lineNumber: 106,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center p-6 sm:p-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-300 text-sm sm:text-base",
                                            children: "Badge not found"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                            lineNumber: 174,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                        lineNumber: 173,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                    lineNumber: 77,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 sm:p-10 shadow-2xl sticky top-4 sm:top-6 lg:top-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl",
                                                children: "⚙️"
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this),
                                            " Actions"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 sm:space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: actions.createObject,
                                                disabled: objectExists || state.isLoading,
                                                className: "w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 disabled:from-slate-700 disabled:to-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-violet-500/50 disabled:hover:scale-100 text-sm sm:text-base shadow-lg",
                                                children: [
                                                    "🚀 ",
                                                    objectExists ? "Badge Created" : "Mint Badge"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: actions.increment,
                                                disabled: !objectExists || state.isLoading,
                                                className: "w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 disabled:from-slate-700 disabled:to-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50 disabled:hover:scale-100 text-sm sm:text-base shadow-lg",
                                                children: "⭐ Add Point"
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this),
                                            isOwner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: actions.reset,
                                                disabled: !objectExists || state.isLoading,
                                                className: "w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 disabled:from-slate-700 disabled:to-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 disabled:hover:scale-100 text-sm sm:text-base shadow-lg",
                                                children: "🔄 Reset Points"
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                lineNumber: 206,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: actions.clearObject,
                                                disabled: !objectId,
                                                className: "w-full px-6 sm:px-8 py-3 sm:py-4 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all text-sm sm:text-base",
                                                children: "✕ Clear Badge"
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 p-5 bg-gradient-to-br from-slate-700/30 to-slate-800/30 border border-slate-600/50 rounded-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400 text-xs font-semibold mb-2 uppercase",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                lineNumber: 226,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `w-3 h-3 rounded-full ${state.isLoading ? 'bg-yellow-400 animate-pulse' : state.isConfirmed ? 'bg-green-400' : state.isPending ? 'bg-yellow-400' : 'bg-blue-400'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm sm:text-base font-semibold text-white",
                                                        children: state.isLoading ? "⏳ Processing" : state.isConfirmed ? "✓ Confirmed" : state.isPending ? "⏳ Pending" : "✅ Ready"
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 p-5 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/30 rounded-2xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-200 text-sm leading-relaxed",
                                            children: isOwner && objectExists ? "👑 You own this badge • Full control" : objectExists ? "📋 You can earn points • Add points feature" : "📝 Ready to create • Mint your first badge"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 sm:mt-16 pt-8 border-t border-slate-700/50 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-sm",
                        children: "✨ Built with ❤️ on IOTA • Secure & Decentralized ✨"
                    }, void 0, false, {
                        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
                    lineNumber: 246,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/iota-badges/community/components/MintBoard.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/iota-badges/community/components/Leaderboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Leaderboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Leaderboard() {
    const [badges, setBadges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "0x123...",
            address: "0xUser1...5a2d",
            points: 1250,
            rank: 1,
            badgeType: "diamond"
        },
        {
            id: "0x456...",
            address: "0xUser2...3f8c",
            points: 980,
            rank: 2,
            badgeType: "gold"
        },
        {
            id: "0x789...",
            address: "0xUser3...7d4e",
            points: 850,
            rank: 3,
            badgeType: "gold"
        },
        {
            id: "0xabc...",
            address: "0xUser4...2b91",
            points: 720,
            rank: 4,
            badgeType: "silver"
        },
        {
            id: "0xdef...",
            address: "0xUser5...8a6f",
            points: 650,
            rank: 5,
            badgeType: "silver"
        }
    ]);
    const getBadgeEmoji = (type)=>{
        switch(type){
            case "diamond":
                return "💎";
            case "gold":
                return "🥇";
            case "silver":
                return "🥈";
            case "bronze":
                return "🥉";
            default:
                return "🏅";
        }
    };
    const getBadgeColor = (type)=>{
        switch(type){
            case "diamond":
                return "from-cyan-400 to-blue-400";
            case "gold":
                return "from-yellow-400 to-orange-400";
            case "silver":
                return "from-gray-300 to-gray-400";
            case "bronze":
                return "from-orange-400 to-amber-600";
            default:
                return "from-violet-400 to-indigo-400";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 sm:p-10 shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-3xl",
                                children: "🏆"
                            }, void 0, false, {
                                fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl sm:text-4xl font-bold text-white",
                                children: "Community Leaderboard"
                            }, void 0, false, {
                                fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 ml-12",
                        children: "Top badge holders in the community"
                    }, void 0, false, {
                        fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-slate-700/30 border border-slate-600/50 rounded-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 text-xs font-semibold mb-1",
                                children: "Total Members"
                            }, void 0, false, {
                                fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-white",
                                children: "1,247"
                            }, void 0, false, {
                                fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-slate-700/30 border border-slate-600/50 rounded-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 text-xs font-semibold mb-1",
                                children: "Total Points"
                            }, void 0, false, {
                                fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-white",
                                children: "45.2K"
                            }, void 0, false, {
                                fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-slate-700/30 border border-slate-600/50 rounded-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 text-xs font-semibold mb-1",
                                children: "Avg Points"
                            }, void 0, false, {
                                fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-white",
                                children: "36"
                            }, void 0, false, {
                                fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-slate-700/30 border border-slate-600/50 rounded-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 text-xs font-semibold mb-1",
                                children: "Top Score"
                            }, void 0, false, {
                                fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-cyan-400",
                                children: "1.25K"
                            }, void 0, false, {
                                fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: badges.map((badge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-4 sm:p-5 bg-gradient-to-r ${badge.rank === 1 ? "from-yellow-500/20 to-orange-500/20 border-yellow-500/50" : badge.rank === 2 ? "from-gray-400/20 to-gray-500/20 border-gray-400/50" : badge.rank === 3 ? "from-orange-400/20 to-amber-500/20 border-orange-400/50" : "from-slate-700/30 to-slate-800/30 border-slate-600/50"} border rounded-2xl hover:border-slate-500/80 transition-all hover:shadow-lg`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 sm:gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${getBadgeColor(badge.badgeType)} flex items-center justify-center shadow-lg`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl sm:text-3xl font-bold text-slate-900",
                                            children: badge.rank
                                        }, void 0, false, {
                                            fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                                            lineNumber: 102,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xl",
                                                    children: getBadgeEmoji(badge.badgeType)
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-bold text-slate-300 uppercase",
                                                    children: badge.badgeType
                                                }, void 0, false, {
                                                    fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm sm:text-base font-semibold text-white break-all",
                                            children: badge.address
                                        }, void 0, false, {
                                            fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400 mt-1",
                                            children: [
                                                "Badge ID: ",
                                                badge.id
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0 text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl sm:text-3xl font-bold text-white",
                                            children: badge.points
                                        }, void 0, false, {
                                            fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400 mt-1",
                                            children: "⭐ Points"
                                        }, void 0, false, {
                                            fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    }, badge.id, false, {
                        fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "w-full mt-8 px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white font-semibold rounded-xl transition-all",
                children: "View All Members (1,247)"
            }, void 0, false, {
                fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/iota-badges/community/components/Leaderboard.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}),
"[project]/iota-badges/community/components/Achievements.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Achievements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-badges/community/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function Achievements() {
    const achievements = [
        {
            id: "first-badge",
            name: "First Step",
            description: "Mint your first badge",
            icon: "🎖️",
            progress: 1,
            maxProgress: 1,
            unlocked: true
        },
        {
            id: "10-points",
            name: "Rising Star",
            description: "Earn 10 points",
            icon: "⭐",
            progress: 8,
            maxProgress: 10,
            unlocked: false
        },
        {
            id: "100-points",
            name: "Community Star",
            description: "Earn 100 points",
            icon: "✨",
            progress: 28,
            maxProgress: 100,
            unlocked: false
        },
        {
            id: "collector",
            name: "Collector",
            description: "Own 5 different badges",
            icon: "🏆",
            progress: 1,
            maxProgress: 5,
            unlocked: false
        },
        {
            id: "social",
            name: "Social Butterfly",
            description: "Share your badge 10 times",
            icon: "🦋",
            progress: 3,
            maxProgress: 10,
            unlocked: false
        },
        {
            id: "champion",
            name: "Champion",
            description: "Rank in top 10",
            icon: "👑",
            progress: 0,
            maxProgress: 1,
            unlocked: false
        }
    ];
    const unlockedCount = achievements.filter((a)=>a.unlocked).length;
    const progressPercentage = Math.round(achievements.reduce((acc, a)=>acc + Math.min(a.progress, a.maxProgress), 0) / achievements.reduce((acc, a)=>acc + a.maxProgress, 0) * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 sm:p-10 shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-3xl",
                                children: "🎯"
                            }, void 0, false, {
                                fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl sm:text-4xl font-bold text-white",
                                children: "Achievements"
                            }, void 0, false, {
                                fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 ml-12",
                        children: "Unlock badges and milestones"
                    }, void 0, false, {
                        fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 p-6 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 border border-slate-600/50 rounded-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white font-semibold",
                                children: "Overall Progress"
                            }, void 0, false, {
                                fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-violet-400",
                                children: [
                                    progressPercentage,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-slate-700 rounded-full h-3 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-violet-500 to-indigo-500 h-full rounded-full transition-all duration-300",
                            style: {
                                width: `${progressPercentage}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-300 mt-3",
                        children: [
                            unlockedCount,
                            " of ",
                            achievements.length,
                            " achievements unlocked"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: achievements.map((achievement)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-5 rounded-2xl border transition-all ${achievement.unlocked ? "bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/50 shadow-lg shadow-yellow-500/10" : "bg-slate-700/30 border-slate-600/50 opacity-75"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `text-3xl p-2 rounded-lg ${achievement.unlocked ? "bg-yellow-500/20" : "bg-slate-700/50"}`,
                                                children: achievement.icon
                                            }, void 0, false, {
                                                fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-white text-sm sm:text-base",
                                                        children: achievement.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-400",
                                                        children: achievement.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    achievement.unlocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl",
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                                        lineNumber: 128,
                                        columnNumber: 40
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400",
                                                children: [
                                                    achievement.progress,
                                                    " / ",
                                                    achievement.maxProgress
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold text-slate-300",
                                                children: [
                                                    Math.round(achievement.progress / achievement.maxProgress * 100),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full bg-slate-700 rounded-full h-2 overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-full rounded-full transition-all duration-300 ${achievement.unlocked ? "bg-gradient-to-r from-yellow-400 to-orange-400" : "bg-gradient-to-r from-slate-500 to-slate-600"}`,
                                            style: {
                                                width: `${achievement.progress / achievement.maxProgress * 100}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        ]
                    }, achievement.id, true, {
                        fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 p-6 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 border border-indigo-500/50 rounded-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-300 text-sm mb-3",
                        children: "🎁 Next Reward: Rising Star (8/10 points)"
                    }, void 0, false, {
                        fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$badges$2f$community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white font-semibold",
                        children: "You're 2 points away! Keep earning to unlock special benefits."
                    }, void 0, false, {
                        fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/iota-badges/community/components/Achievements.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/iota-badges/community/components/Achievements.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=iota-badges_community_81021698._.js.map