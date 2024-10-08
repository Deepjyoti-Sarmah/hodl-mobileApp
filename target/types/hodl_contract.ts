import { Idl } from "@coral-xyz/anchor";
export type AnchorHodl = Idl & {
    "address": "HDSDejM9dQ549FaWeGhbZeEEHpdRcU4Wz1TPeB2yBFQF",
    "metadata": {
        "name": "hodl_project",
        "version": "0.1.0",
        "spec": "0.1.0",
        "description": "Created with Anchor"
    },
    "instructions": [
        {
            "name": "deposit",
            "discriminator": [
                242,
                35,
                198,
                137,
                82,
                225,
                242,
                182
            ],
            "accounts": [
                {
                    "name": "hodl_account",
                    "writable": true
                },
                {
                    "name": "user_deposit",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    117,
                                    115,
                                    101,
                                    114,
                                    95,
                                    100,
                                    101,
                                    112,
                                    111,
                                    115,
                                    105,
                                    116
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "authority"
                            }
                        ]
                    }
                },
                {
                    "name": "user_token_account",
                    "writable": true
                },
                {
                    "name": "vault",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "hodl_account.authority",
                                "account": "HodlAccount"
                            }
                        ]
                    }
                },
                {
                    "name": "token_program",
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                },
                {
                    "name": "authority",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "system_program",
                    "address": "11111111111111111111111111111111"
                }
            ],
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "initialize",
            "discriminator": [
                175,
                175,
                109,
                31,
                13,
                152,
                155,
                237
            ],
            "accounts": [
                {
                    "name": "hodl_account",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "authority",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "system_program",
                    "address": "11111111111111111111111111111111"
                }
            ],
            "args": []
        },
        {
            "name": "partial_withdraw",
            "discriminator": [
                76,
                249,
                22,
                96,
                222,
                193,
                173,
                38
            ],
            "accounts": [
                {
                    "name": "hodl_account",
                    "writable": true
                },
                {
                    "name": "user_deposit",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    117,
                                    115,
                                    101,
                                    114,
                                    95,
                                    100,
                                    101,
                                    112,
                                    111,
                                    115,
                                    105,
                                    116
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "authority"
                            }
                        ]
                    }
                },
                {
                    "name": "user_token_account",
                    "writable": true
                },
                {
                    "name": "vault",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "hodl_account.authority",
                                "account": "HodlAccount"
                            }
                        ]
                    }
                },
                {
                    "name": "token_program",
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                },
                {
                    "name": "authority",
                    "writable": true,
                    "signer": true
                }
            ],
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "pause",
            "discriminator": [
                211,
                22,
                221,
                251,
                74,
                121,
                193,
                47
            ],
            "accounts": [
                {
                    "name": "hodl_account",
                    "writable": true
                },
                {
                    "name": "authority",
                    "signer": true,
                    "relations": [
                        "hodl_account"
                    ]
                }
            ],
            "args": []
        },
        {
            "name": "unpause",
            "discriminator": [
                169,
                144,
                4,
                38,
                10,
                141,
                188,
                255
            ],
            "accounts": [
                {
                    "name": "hodl_account",
                    "writable": true
                },
                {
                    "name": "authority",
                    "signer": true,
                    "relations": [
                        "hodl_account"
                    ]
                }
            ],
            "args": []
        },
        {
            "name": "withdraw",
            "discriminator": [
                183,
                18,
                70,
                156,
                148,
                109,
                161,
                34
            ],
            "accounts": [
                {
                    "name": "hodl_account",
                    "writable": true
                },
                {
                    "name": "user_deposit",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    117,
                                    115,
                                    101,
                                    114,
                                    95,
                                    100,
                                    101,
                                    112,
                                    111,
                                    115,
                                    105,
                                    116
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "authority"
                            }
                        ]
                    }
                },
                {
                    "name": "user_token_account",
                    "writable": true
                },
                {
                    "name": "vault",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "hodl_account.authority",
                                "account": "HodlAccount"
                            }
                        ]
                    }
                },
                {
                    "name": "token_program",
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                },
                {
                    "name": "authority",
                    "writable": true,
                    "signer": true
                }
            ],
            "args": []
        }
    ],
    "accounts": [
        {
            "name": "HodlAccount",
            "discriminator": [
                210,
                120,
                75,
                63,
                89,
                89,
                35,
                31
            ]
        },
        {
            "name": "UserDeposit",
            "discriminator": [
                69,
                238,
                23,
                217,
                255,
                137,
                185,
                35
            ]
        }
    ],
    "events": [
        {
            "name": "DepositEvent",
            "discriminator": [
                120,
                248,
                61,
                83,
                31,
                142,
                107,
                144
            ]
        },
        {
            "name": "WithdrawEvent",
            "discriminator": [
                22,
                9,
                133,
                26,
                160,
                44,
                71,
                192
            ]
        }
    ],
    "errors": [
        {
            "code": 6000,
            "name": "InvalidAmount",
            "msg": "Invalid deposit amount"
        },
        {
            "code": 6001,
            "name": "LockPeriodNotEnded",
            "msg": "Lock period has not ended yet"
        },
        {
            "code": 6002,
            "name": "UnauthorizedWithdrawal",
            "msg": "Unauthorized withdrawal attempt"
        },
        {
            "code": 6003,
            "name": "ContractPaused",
            "msg": "Contract is paused"
        },
        {
            "code": 6004,
            "name": "InsufficientBalance",
            "msg": "Insufficient balance for withdrawal"
        }
    ],
    "types": [
        {
            "name": "DepositEvent",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "user",
                        "type": "pubkey"
                    },
                    {
                        "name": "amount",
                        "type": "u64"
                    },
                    {
                        "name": "unlock_timestamp",
                        "type": "i64"
                    }
                ]
            }
        },
        {
            "name": "HodlAccount",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "authority",
                        "type": "pubkey"
                    },
                    {
                        "name": "total_deposits",
                        "type": "u64"
                    },
                    {
                        "name": "paused",
                        "type": "bool"
                    },
                    {
                        "name": "last_updated",
                        "type": "i64"
                    }
                ]
            }
        },
        {
            "name": "UserDeposit",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "owner",
                        "type": "pubkey"
                    },
                    {
                        "name": "amount",
                        "type": "u64"
                    },
                    {
                        "name": "deposit_timestamp",
                        "type": "i64"
                    },
                    {
                        "name": "unlock_timestamp",
                        "type": "i64"
                    }
                ]
            }
        },
        {
            "name": "WithdrawEvent",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "user",
                        "type": "pubkey"
                    },
                    {
                        "name": "amount",
                        "type": "u64"
                    }
                ]
            }
        }
    ]
}