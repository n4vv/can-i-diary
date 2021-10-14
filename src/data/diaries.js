import { skills } from "./skills"

const diaryList = [
    {
        id: 0,
        title: "Ardougne",     
        reward: "Ardougne cloak",
        tiers: [
            {
                id: 0,
                title: "Easy",
                reqs: [{
                    level: 5,
                    skillId: 18
                }]
            },
            {
                id: 1,
                title: "Medium",
                reqs: [{
                    level: 39,
                    skillId: 17,
                },{
                    level: 50,
                    skillId: 1,
                    unboostable: true,
                },{
                    level: 10,
                    skillId: 23,
                    unboostable: true,
                },{
                    level: 49,
                    skillId: 13,
                },{
                    level: 31,
                    skillId: 20,
                },{
                    level: 50,
                    skillId: 12,
                },{
                    level: 51,
                    skillId: 7,
                    unboostable: true,
                },{
                    level: 25,
                    skillId: 5,
                    unboostable: true,
                },{
                    level: 38,
                    skillId: 3,
                    unboostable: true,
                },{
                    level: 38,
                    skillId: 18,
                },{
                    level: 36,
                    skillId: 9,
                    unboostable: true,
                }],
                qp: 107,
                ironreqs: [{
                    level: 59,
                    skillId: 10
                },
                {
                    level: 59,
                    skillId: 14
                }],
            },
            {
                id: 2,
                title: "Hard",
                reqs: [{
                    level: 56,
                    skillId: 17,
                    unboostable: true,
                },{
                    level: 50,
                    skillId: 23,
                    unboostable: true,
                }, {
                    level: 53,
                    skillId: 8,
                    unboostable: true,
                }, {
                    level: 50,
                    skillId: 13,
                    unboostable: true,
                },{
                    level: 70,
                    skillId: 20,
                },{
                    level: 53,
                    skillId: 11,
                    unboostable: true,
                },{
                    level: 5,
                    skillId: 10,
                    unboostable: true,
                },{
                    level: 45,
                    skillId: 16,
                },{
                    level: 59,
                    skillId: 22,
                },{
                    level: 66,
                    skillId: 7,
                },{
                    level: 52,
                    skillId: 15,
                    unboostable: true,
                },{
                    level: 42,
                    skillId: 6,
                    unboostable: true,
                },{
                    level: 60,
                    skillId: 5,
                    unboostable: true,
                },{
                    level: 65,
                    skillId: 21,
                },{
                    level: 68,
                    skillId: 14,
                },{
                    level: 50,
                    skillId: 3,
                    unboostable: true,
                },{
                    level: 72,
                    skillId: 18,
                },{
                    level: 50,
                    skillId: 9,
                    unboostable: true,
                }],
            },
            {
                id: 3,
                title: "Elite",
                reqs: [{
                    level: 90,
                    skillId: 17,
                },{
                    level: 91,
                    skillId: 8,
                },{
                    level: 35,
                    skillId: 13,
                    unboostable: true,
                },{
                    level: 85,
                    skillId: 20,
                },{
                    level: 50,
                    skillId: 12,
                    unboostable: true,
                },{
                    level: 81,
                    skillId: 11,
                    unboostable: true,
                },{
                    level: 69,
                    skillId: 10,
                },{
                    level: 10,
                    skillId: 16,
                    unboostable: true,
                },{
                    level: 94,
                    skillId: 7,
                    unboostable: true,
                },{
                    level: 40,
                    skillId: 5,
                    unboostable: true,
                },{
                    level: 91,
                    skillId: 14,
                },{
                    level: 82,
                    skillId: 18,
                },]
            }
        ],
    },
    {
        id: 1,
        title: "Desert",
        reward: "Desert amulet",
        tiers: [
            {
                id: 0,
                title: "Easy",
                reqs: [{
                    level: 5,
                    skillId: 22,
                },{
                    level: 21,
                    skillId: 18,
                }],
            },
            {
                id: 1,
                title: "Medium",
                reqs: [{
                    level: 37,
                    skillId: 5,
                    unboostable: true,
                },{
                    level: 50,
                    skillId: 13,
                    unboostable: true,
                },{
                    level: 45,
                    skillId: 12,
                    unboostable: true,
                },{
                    level: 43,
                    skillId: 6,
                    unboostable: true,
                },{
                    level: 39,
                    skillId: 7,
                    unboostable: true,
                },{
                    level: 37,
                    skillId: 15,
                    unboostable: true,
                },{
                    level: 30,
                    skillId: 17,
                },{
                    level: 22,
                    skillId: 19,
                },{
                    level: 47,
                    skillId: 22,
                },{
                    level: 37,
                    skillId: 18,
                    unboostable: true,
                },{
                    level: 36,
                    skillId: 16,
                },{
                    level: 35,
                    skillId: 9,
                },{
                    level: 20,
                    skillId: 23,
                },]
            },
            {
                id: 2,
                title: "Hard",
                reqs: [{
                    level: 10,
                    skillId: 10,
                    unboostable: true,
                },{
                    level: 40,
                    skillId: 5,
                    unboostable: true,
                },{
                    level: 31,
                    skillId: 16,
                    unboostable: true,
                },{
                    level: 60,
                    skillId: 15,
                    unboostable: true,
                },{
                    level: 55,
                    skillId: 9,
                    unboostable: true,
                },{
                    level: 70,
                    skillId: 17,
                },{
                    level: 45,
                    skillId: 15,
                },{
                    level: 68,
                    skillId: 7,
                    unboostable: true,
                },{
                    level: 65,
                    skillId: 18,
                },{
                    level: 65,
                    skillId: 19,
                },{
                    level: 61,
                    skillId: 13,
                    unboostable: true,
                },{
                    level: 50,
                    skillId: 1,
                    unboostable: true,
                },{
                    level: 40,
                    skillId: 2,
                    unboostable: true,
                },{
                    level: 60,
                    skillId: 12,
                },{
                    level: 68,
                    skillId: 14,
                },],
                combat: 85,
            },
            {
                id: 3,
                title: "Elite",
                reqs: [{
                    level: 15,
                    skillId: 5,
                    unboostable: true,
                },{
                    level: 10,
                    skillId: 16,
                    unboostable: true,
                },{
                    level: 50,
                    skillId: 12,
                    unboostable: true,
                },{
                    level: 40,
                    skillId: 5,
                    unboostable: true,
                },{
                    level: 20,
                    skillId: 14,
                    unboostable: true,
                },{
                    level: 78,
                    skillId: 23,
                },{
                    level: 85,
                    skillId: 8,
                },{
                    level: 95,
                    skillId: 10,
                },{
                    level: 94,
                    skillId: 7,
                    unboostable: true,
                },{
                    level: 85,
                    skillId: 6,
                    unboostable: true,
                },{
                    level: 91,
                    skillId: 18,
                    unboostable: true,
                },]
            }
        ],
    },
    {
        id: 2,
        title: "Falador",
        reward: "Falador shield",
        tiers: [
            {
                id: 0,
                title: "Easy",
                reqs: [{
                    level: 5,
                    skillId: 18
                },{
                    level: 16,
                    skillId: 23
                },{
                    level: 10,
                    skillId: 15
                },{
                    level: 13,
                    skillId: 14
                },]
            },
            {
                id: 1,
                title: "Medium",
                reqs: [{
                    level: 42,
                    skillId: 17,
                },{
                    level: 20,
                    skillId: 8,
                    unboostable: true,
                },{
                    level: 40,
                    skillId: 13,
                },{
                    level: 20,
                    skillId: 2,
                    unboostable: true,
                },{
                    level: 23,
                    skillId: 20,
                },{
                    level: 49,
                    skillId: 12,
                },{
                    level: 37,
                    skillId: 7,
                    unboostable: true,
                },{
                    level: 40,
                    skillId: 15
                },{
                    level: 10,
                    skillId: 6,
                    unboostable: true,
                },{
                    level: 19,
                    skillId: 5,
                    unboostable: true,
                },{
                    level: 32,
                    skillId: 19
                },{
                    level: 37,
                    skillId: 3,
                    unboostable: true,
                },{
                    level: 40,
                    skillId: 18
                },{
                    level: 30,
                    skillId: 9
                },],
                qp: 12
            },
            {
                id: 2,
                title: "Hard",
                reqs: [{
                    level: 59,
                    skillId: 17,
                    unboostable: true,
                },{
                    level: 53,
                    skillId: 8,
                    unboostable: true,
                },{
                    level: 31,
                    skillId: 13,
                    unboostable: true,
                },{
                    level: 50,
                    skillId: 2,
                    unboostable: true,
                },{
                    level: 45,
                    skillId: 20,
                    unboostable: true,
                },{
                    level: 30,
                    skillId: 12,
                    unboostable: true,
                },{
                    level: 53,
                    skillId: 11,
                    unboostable: true,
                },{
                    level: 52,
                    skillId: 16,
                    unboostable: true,
                },{
                    level: 60,
                    skillId: 15
                },{
                    level: 70,
                    skillId: 6,
                    unboostable: true,
                },{
                    level: 56,
                    skillId: 21,
                },{
                    level: 72,
                    skillId: 19,
                },{
                    level: 58,
                    skillId: 18,
                    unboostable: true,
                },{
                    level: 71,
                    skillId: 9,
                },],
                qp: 32,
                sum: [{
                    level: 130,
                    skillId: [1,3],
                }]
            },
            {
                id: 3,
                title: "Elite",
                reqs: [{
                    level: 80,
                    skillId: 17,
                },{
                    level: 91,
                    skillId: 20,
                },{
                    level: 81,
                    skillId: 16,
                },{
                    level: 17,
                    skillId: 15,
                    unboostable: true,
                },{
                    level: 88,
                    skillId: 21,
                },{
                    level: 13,
                    skillId: 18,
                    unboostable: true,
                },{
                    level: 75,
                    skillId: 9
                },],
                qp: 32,
                other: "A 99 in any skill, or 284 Quest points"
            }
        ],
    },
    {
        id: 3,
        title: "Fremennik",
        reward: "Fremennik sea boots",
        tiers: [
            {
                id: 0,
                title: "Easy",
                reqs: [{
                    level: 23,
                    skillId: 13,
                },{
                    level: 15,
                    skillId: 12,
                },{
                    level: 11,
                    skillId: 22,
                },{
                    level: 20,
                    skillId: 15,
                },{
                    level: 20,
                    skillId: 14,
                },{
                    level: 5,
                    skillId: 18,
                },{
                    level: 15,
                    skillId: 9,
                }]
            },
            {
                id: 1,
                title: "Medium",
                reqs: [{
                    level: 35,
                    skillId: 17,
                },{
                    level: 37,
                    skillId: 23,
                },{
                    level: 30,
                    skillId: 2,
                },{
                    level: 35,
                    skillId: 22,
                },{
                    level: 40,
                    skillId: 15
                },{
                    level: 47,
                    skillId: 19,
                },{
                    level: 50,
                    skillId: 14,
                },{
                    level: 42,
                    skillId: 18,
                },]
            },
            {
                id: 2,
                title: "Hard",
                reqs: [{
                    level: 32,
                    skillId: 17,
                    unboostable: true,
                },{
                    level: 20,
                    skillId: 23
                },{
                    level: 61,
                    skillId: 13,
                    unboostable: true,
                },{
                    level: 40,
                    skillId: 2,
                    unboostable: true,
                },{
                    level: 49,
                    skillId: 12,
                    unboostable: true,
                },{
                    level: 66,
                    skillId: 16,
                },{
                    level: 55,
                    skillId: 22,
                },{
                    level: 72,
                    skillId: 7,
                    unboostable: true,
                },{
                    level: 70,
                    skillId: 15,
                },{
                    level: 60,
                    skillId: 14,
                    unboostable: true,
                },{
                    level: 75,
                    skillId: 18,
                },{
                    level: 56,
                    skillId: 9,
                },]
            },
            {
                id: 3,
                title: "Elite",
                reqs: [{
                    level: 80,
                    skillId: 17,
                },{
                    level: 80,
                    skillId: 13,
                },{
                    level: 70,
                    skillId: 4,
                    unboostable: true,
                },{
                    level: 70,
                    skillId: 5,
                    unboostable: true,
                },{
                    level: 82,
                    skillId: 21,
                },{
                    level: 83,
                    skillId: 19,
                },{
                    level: 70,
                    skillId: 3,
                    unboostable: true,
                },],
                cmb: 999,
            }
        ],
    },
    {
        id: 4,
        title: "Kandarin",
        reward: "Kandarin headgear",
        tiers: [
            {
                id: 0,
                title: "Easy",
                reqs: [{
                    level: 20,
                    skillId: 17,
                },{
                    level: 13,
                    skillId: 20,
                },{
                    level: 16,
                    skillId: 11,
                },]
            },
            {
                id: 1,
                title: "Medium",
                reqs: [{
                    level: 36,
                    skillId: 17,
                },{
                    level: 43,
                    skillId: 8,
                },{
                    level: 26,
                    skillId: 20,
                },{
                    level: 46,
                    skillId: 11,
                },{
                    level: 50,
                    skillId: 10,
                },{
                    level: 48,
                    skillId: 16,
                },{
                    level: 45,
                    skillId: 7,
                    unboostable: true,
                },{
                    level: 30,
                    skillId: 15,
                },{
                    level: 40,
                    skillId: 5,
                    unboostable: true,
                },{
                    level: 22,
                    skillId: 3,
                    unboostable: true,
                },{
                    level: 47,
                    skillId: 18,
                },]
            },
            {
                id: 2,
                title: "Hard",
                reqs: [{
                    level: 60,
                    skillId: 17,
                },{
                    level: 50,
                    skillId: 23,
                },{
                    level: 10,
                    skillId: 13,
                },{
                    level: 70,
                    skillId: 2,
                    unboostable: true,
                },{
                    level: 65,
                    skillId: 12,
                },{
                    level: 70,
                    skillId: 11,
                },{
                    level: 70,
                    skillId: 10,
                },{
                    level: 70,
                    skillId: 6,
                    unboostable: true,
                },{
                    level: 56,
                    skillId: 7,
                    unboostable: true,
                },{
                    level: 75,
                    skillId: 14,
                },{
                    level: 50,
                    skillId: 18,
                },{
                    level: 60,
                    skillId: 9,
                },]
            },
            {
                id: 3,
                title: "Elite",
                reqs: [{
                    level: 60,
                    skillId: 17,
                },{
                    level: 80,
                    skillId: 8,
                },{
                    level: 85,
                    skillId: 13,
                },{
                    level: 79,
                    skillId: 20,
                },{
                    level: 85,
                    skillId: 12,
                },{
                    level: 76,
                    skillId: 11,
                },{
                    level: 86,
                    skillId: 16,
                },{
                    level: 87,
                    skillId: 7,
                    unboostable: true,
                },{
                    level: 90,
                    skillId: 14,
                },]
            }
        ]
    },
    {
        id: 5,
        title: "Karamja",
        reward: "Karamja gloves",
        rewardurl: "Karamja_gloves",
        tiers: [
            {
                id: 0,
                title: "Easy",
                reqs: [{
                    level: 15,
                    skillId: 17,
                },{
                    level: 40,
                    skillId: 15,
                },]
            },
            {
                id: 1,
                title: "Medium",
                reqs: [{
                    level: 12,
                    skillId: 17,
                },{
                    level: 16,
                    skillId: 8,
                },{
                    level: 27,
                    skillId: 20,
                },{
                    level: 65,
                    skillId: 11,
                },{
                    level: 41,
                    skillId: 22,
                },{
                    level: 40,
                    skillId: 15,
                },{
                    level: 50,
                    skillId: 9,
                },]
            },
            {
                id: 2,
                title: "Hard",
                reqs: [{
                    level: 53,
                    skillId: 17,
                },{
                    level: 53,
                    skillId: 8,
                },{
                    level: 59,
                    skillId: 7,
                    unboostable: true,
                },{
                    level: 52,
                    skillId: 15,
                },{
                    level: 42,
                    skillId: 5,
                    unboostable: true,
                },{
                    level: 44,
                    skillId: 21,
                },{
                    level: 50,
                    skillId: 19,
                },{
                    level: 40,
                    skillId: 14,
                },{
                    level: 50,
                    skillId: 3,
                    unboostable: true,
                },{
                    level: 50,
                    skillId: 18,
                },{
                    level: 34,
                    skillId: 9,
                },],
                cmb: 100,
            },
            {
                id: 3,
                title: "Elite",
                reqs: [{
                    level: 72,
                    skillId: 20,
                },{
                    level: 87,
                    skillId: 16,
                },{
                    level: 91,
                    skillId: 21,
                },]
            }
        ]
    },
    {
        id: 6,
        title: "Kourend & Kebos",
        reward: "Rada's blessing",
        rewardurl: "Rada%27s_blessing",
        tiers: [
            {
                id: 0,
                title: "Easy",
                reqs: [{
                    level: 25,
                    skillId: 23,
                },{
                    level: 20,
                    skillId: 11,
                },{
                    level: 12,
                    skillId: 16,
                },{
                    level: 15,
                    skillId: 15,
                },{
                    level: 25,
                    skillId: 18,
                },]
            },
            {
                id: 1,
                title: "Medium",
                reqs: [{
                    level: 49,
                    skillId: 17,
                },{
                    level: 30,
                    skillId: 13,
                },{
                    level: 45,
                    skillId: 20,
                },{
                    level: 50,
                    skillId: 12,
                    unboostable: true,
                },{
                    level: 43,
                    skillId: 11,
                },{
                    level: 53,
                    skillId: 22,
                },{
                    level: 42,
                    skillId: 15,
                },{
                    level: 50,
                    skillId: 9,
                },]
            },
            {
                id: 2,
                title: "Hard",
                reqs: [{
                    level: 74,
                    skillId: 20,
                },{
                    level: 66,
                    skillId: 7,
                    unboostable: true,
                },{
                    level: 65,
                    skillId: 15,
                },{
                    level: 62,
                    skillId: 19,
                },{
                    level: 70,
                    skillId: 14,
                },{
                    level: 49,
                    skillId: 18,
                },{
                    level: 60,
                    skillId: 9,
                },],
                cmb: 85,
            },
            {
                id: 3,
                title: "Elite",
                reqs: [{
                    level: 84,
                    skillId: 8
                },
                {
                    level: 38,
                    skillId: 13
                },
                {
                    level: 85,
                    skillId: 20
                },
                {
                    level: 82,
                    skillId: 11
                },
                {
                    level: 40,
                    skillId: 10
                },
                {
                    level: 90,
                    skillId: 7
                },
                {
                    level: 38,
                    skillId: 15
                },
                {
                    level: 77,
                    skillId: 21,
                },
                {
                    level: 95,
                    skillId: 19,
                },
                {
                    level: 90,
                    skillId: 9,
                }],
                cmb: 999,
            }
        ]
    },
    {
        id: 7,
        title: "Lumbridge & Draynor",
        reward: "Explorer's ring",
        rewardurl: "Explorer%27s_ring",
        tiers: [
            {
                id: 0,
                title: "Easy",
                reqs: [{
                    level: 10,
                    skillId: 17,
                },{
                    level: 15,
                    skillId: 12,
                },{
                    level: 15,
                    skillId: 11,
                },{
                    level: 15,
                    skillId: 15,
                },{
                    level: 5,
                    skillId: 21,
                },{
                    level: 7,
                    skillId: 19,
                },{
                    level: 15,
                    skillId: 9,
                },]
            },
            {
                id: 1,
                title: "Medium",
                reqs: [{
                    level: 20,
                    skillId: 17,
                },{
                    level: 38,
                    skillId: 13,
                },{
                    level: 30,
                    skillId: 11,
                },{
                    level: 42,
                    skillId: 22,
                },{
                    level: 31,
                    skillId: 7,
                    unboostable: true,
                },{
                    level: 50,
                    skillId: 5,
                    unboostable: true,
                },{
                    level: 23,
                    skillId: 21,
                },{
                    level: 19,
                    skillId: 3,
                    unboostable: true,
                },{
                    level: 38,
                    skillId: 18,
                },{
                    level: 36,
                    skillId: 9,
                },],
                cmb: 70,
            },
            {
                id: 2,
                title: "Hard",
                reqs: [{
                    level: 46,
                    skillId: 17,
                },{
                    level: 70,
                    skillId: 13,
                },{
                    level: 63,
                    skillId: 20,
                },{
                    level: 65,
                    skillId: 12,
                },{
                    level: 60,
                    skillId: 7,
                    unboostable: true,
                },{
                    level: 52,
                    skillId: 6,
                    unboostable: true,
                },{
                    level: 59,
                    skillId: 21,
                },{
                    level: 57,
                    skillId: 9,
                },],
                qp: 175,
            },
            {
                id: 3,
                title: "Elite",
                reqs: [{
                    level: 70,
                    skillId: 17,
                },{
                    level: 70,
                    skillId: 5,
                    unboostable: true,
                },{
                    level: 76,
                    skillId: 21,
                },{
                    level: 88,
                    skillId: 14,
                },{
                    level: 70,
                    skillId: 3,
                    unboostable: true,
                },{
                    level: 78,
                    skillId: 18,
                },{
                    level: 75,
                    skillId: 9,
                },],
                qp: 284,
            }
        ]
    },
    {
        id: 8,
        title: "Morytania",
        reward: "Morytania legs",
        rewardurl: "Morytania_legs",
        tiers: [
            {
                id: 0,
                title: "Easy",
                reqs: [{
                    level: 12,
                    skillId: 8,
                },{
                    level: 15,
                    skillId: 13,
                },{
                    level: 23,
                    skillId: 20,
                },{
                    level: 15,
                    skillId: 19,
                },],
                ironreqs: [{
                    level: 47,
                    skillId: 20,
                },],
                cmb: 20,
            },
            {
                id: 1,
                title: "Medium",
                reqs: [{
                    level: 42,
                    skillId: 17,
                },{
                    level: 40,
                    skillId: 8,
                },{
                    level: 50,
                    skillId: 11,
                    unboostable: true,
                },{
                    level: 22,
                    skillId: 16,
                },{
                    level: 29,
                    skillId: 22,
                },{
                    level: 42,
                    skillId: 19,
                },{
                    level: 50,
                    skillId: 14,
                    unboostable: true,
                },{
                    level: 45,
                    skillId: 9,
                },],
            },
            {
                id: 2,
                title: "Hard",
                reqs: [{
                    level: 71,
                    skillId: 17,
                },{
                    level: 50,
                    skillId: 23,
                },{
                    level: 70,
                    skillId: 2,
                    unboostable: true,
                },{
                    level: 50,
                    skillId: 12,
                },{
                    level: 66,
                    skillId: 7,
                    unboostable: true,
                },{
                    level: 55,
                    skillId: 15,
                },{
                    level: 70,
                    skillId: 6,
                    unboostable: true,
                },{
                    level: 58,
                    skillId: 19,
                },{
                    level: 50,
                    skillId: 14,
                    unboostable: true,
                },{
                    level: 53,
                    skillId: 18,
                    unboostable: true,
                },{
                    level: 50,
                    skillId: 9,
                },]
            },
            {
                id: 3,
                title: "Elite",
                reqs: [{
                    level: 70,
                    skillId: 1,
                    unboostable: true,
                },{
                    level: 84,
                    skillId: 13,
                },{
                    level: 70,
                    skillId: 2,
                    unboostable: true,
                },{
                    level: 80,
                    skillId: 12,
                },{
                    level: 96,
                    skillId: 11,
                },{
                    level: 83,
                    skillId: 7,
                },{
                    level: 70,
                    skillId: 5,
                    unboostable: true,
                },{
                    level: 85,
                    skillId: 19,
                },{
                    level: 76,
                    skillId: 3,
                    unboostable: true,
                },]
            }
        ]
    },
    {
        id: 9,
        title: "Varrock",
        reward: "Varrock armour",
        rewardurl: "Varrock_armour",
        tiers: [
            {
                id: 0,
                title: "Easy",
                reqs: [{
                    level: 13,
                    skillId: 17,
                },{
                    level: 8,
                    skillId: 13,
                },{
                    level: 20,
                    skillId: 11,
                },{
                    level: 15,
                    skillId: 15,
                },{
                    level: 9,
                    skillId: 21,
                },{
                    level: 5,
                    skillId: 18,
                },]
            },
            {
                id: 1,
                title: "Medium",
                reqs: [{
                    level: 30,
                    skillId: 17,
                },{
                    level: 36,
                    skillId: 13,
                },{
                    level: 30,
                    skillId: 20,
                },{
                    level: 40,
                    skillId: 12,
                },{
                    level: 10,
                    skillId: 16,
                },{
                    level: 25,
                    skillId: 7,
                },{
                    level: 25,
                    skillId: 18,
                },]
            },
            {
                id: 2,
                title: "Hard",
                reqs: [{
                    level: 51,
                    skillId: 17,
                },{
                    level: 50,
                    skillId: 23,
                    unboostable: true,
                },{
                    level: 68,
                    skillId: 20,
                },{
                    level: 60,
                    skillId: 12,
                },{
                    level: 66,
                    skillId: 22,
                    unboostable: true,
                },{
                    level: 54,
                    skillId: 7,
                },{
                    level: 52,
                    skillId: 6,
                    unboostable: true,
                },{
                    level: 40,
                    skillId: 5,
                    unboostable: true,
                },{
                    level: 53,
                    skillId: 18,
                },{
                    level: 60,
                    skillId: 9,
                },]
            },
            {
                id: 3,
                title: "Elite",
                reqs: [{
                    level: 95,
                    skillId: 8,
                },{
                    level: 81,
                    skillId: 10,
                },{
                    level: 90,
                    skillId: 16,
                },{
                    level: 86,
                    skillId: 7,
                },{
                    level: 78,
                    skillId: 21,
                },{
                    level: 89,
                    skillId: 14,
                },]
            }
        ]
    },
    {
        id: 10,
        title: "Western Provinces",
        reward: "Western banner",
        rewardurl: "Western_banner",
        tiers: [
            {
                id: 0,
                title: "Easy",
                reqs: [{
                    level: 20,
                    skillId: 10,
                },{
                    level: 9,
                    skillId: 22,
                },{
                    level: 15,
                    skillId: 15,
                },{
                    level: 30,
                    skillId: 5,
                    unboostable: true,
                },],
                cmb: 40,
            },
            {
                id: 1,
                title: "Medium",
                reqs: [{
                    level: 37,
                    skillId: 17,
                },{
                    level: 42,
                    skillId: 8,
                },{
                    level: 35,
                    skillId: 12,
                },{
                    level: 46,
                    skillId: 11,
                },{
                    level: 5,
                    skillId: 10,
                },{
                    level: 31,
                    skillId: 22,
                },{
                    level: 40,
                    skillId: 15,
                },{
                    level: 30,
                    skillId: 5,
                    unboostable: true,
                },{
                    level: 35,
                    skillId: 9,
                }],
                cmb: 70,
            },
            {
                id: 2,
                title: "Hard",
                reqs: [{
                    level: 56,
                    skillId: 17,
                },{
                    level: 65,
                    skillId: 23,
                },{
                    level: 70,
                    skillId: 8,
                },{
                    level: 68,
                    skillId: 20,
                },{
                    level: 50,
                    skillId: 12,
                },{
                    level: 62,
                    skillId: 11,
                },{
                    level: 5,
                    skillId: 10,
                },{
                    level: 69,
                    skillId: 22,
                },{
                    level: 70,
                    skillId: 5,
                    unboostable: true,
                },{
                    level: 64,
                    skillId: 7,
                },{
                    level: 70,
                    skillId: 15,
                },{
                    level: 75,
                    skillId: 18,
                },{
                    level: 50,
                    skillId: 9,
                },],
                cmb: 100,
            },
            {
                id: 3,
                title: "Elite",
                reqs: [{
                    level: 85,
                    skillId: 17,
                },{
                    level: 42,
                    skillId: 1,
                    unboostable: true,
                },{
                    level: 42,
                    skillId: 2,
                    unboostable: true,
                },{
                    level: 75,
                    skillId: 20,
                },{
                    level: 85,
                    skillId: 10,
                },{
                    level: 42,
                    skillId: 4,
                    unboostable: true,
                },{
                    level: 42,
                    skillId: 7,
                    unboostable: true,
                },{
                    level: 22,
                    skillId: 6,
                    unboostable: true,
                },{
                    level: 42,
                    skillId: 5,
                    unboostable: true,
                },{
                    level: 93,
                    skillId: 19,
                },{
                    level: 42,
                    skillId: 3,
                    unboostable: true,
                },{
                    level: 85,
                    skillId: 18,
                },],
                cmb: 40,
            }
        ]
    },
    {
        id: 11,
        title: "Wilderness",
        reward: "Wilderness sword",
        rewardurl: "Wilderness_sword",
        tiers: [
            {
                id: 0,
                title: "Easy",
                reqs: [{
                    level: 15,
                    skillId: 17,
                },{
                    level: 21,
                    skillId: 7,
                },{
                    level: 15,
                    skillId: 15,
                },]
            },
            {
                id: 1,
                title: "Medium",
                reqs: [{
                    level: 60,
                    skillId: 7,
                },{
                    level: 55,
                    skillId: 15,
                },{
                    level: 50,
                    skillId: 19,
                },{
                    level: 50,
                    skillId: 14,
                },{
                    level: 61,
                    skillId: 9,
                },],
                either: [{
                    level: 60,
                    skillId: 17,
                },{
                    level: 60,
                    skillId: 3,
                },]
            },
            {
                id: 2,
                title: "Hard",
                reqs: [{
                    level: 64,
                    skillId: 17,
                },{
                    level: 53,
                    skillId: 11,
                },{
                    level: 67,
                    skillId: 22,
                },{
                    level: 66,
                    skillId: 7,
                },{
                    level: 68,
                    skillId: 19,
                },{
                    level: 75,
                    skillId: 14,
                },]
            },
            {
                id: 3,
                title: "Elite",
                reqs: [{
                    level: 90,
                    skillId: 8,
                },{
                    level: 75,
                    skillId: 12,
                },{
                    level: 85,
                    skillId: 11,
                },{
                    level: 96,
                    skillId: 7,
                },{
                    level: 85,
                    skillId: 15,
                },{
                    level: 83,
                    skillId: 19,
                },{
                    level: 90,
                    skillId: 14,
                },{
                    level: 84,
                    skillId: 18,
                },{
                    level: 75,
                    skillId: 9,
                },]
            }
        ]
    }
]

export const diaries = diaryList.map((diary) => ({
    id: diary.id,
    title: diary.title,
    reward: diary.reward,
    tiers: diary.tiers.map((tier)=> ({
        id: tier.id,
        title: tier.title,
        reqs: tier.reqs.map((req)=> ({
            level: req.level,
            skillId: req.skillId,
            skill: skills[req.skillId].name,
            boostable: req.unboostable ? false : true
        }))
    }))
}));