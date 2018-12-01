var mongoose = require("mongoose");
var CourseList = require("./models/course.server.model.js");
/*

*/
var data = [
    {
            "COURSES": [
                {
                    "code": "EEE3308C",
                    "courseId": "011720",
                    "name": "Electronic Circuits 1",
                    "termInd": " ",
                    "description": "Fundamentals of electronic circuits and systems. Laboratory.",
                    "prerequisites": "Prereq: EEL 3008 and EEL 3112.",
                    "sections": [
                        {
                            "number": "172C",
                            "classNumber": 12211,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Electronic Circuits 1",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 67.12,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Yong Yoon"
                                },
                                {
                                    "name": "Yong Yoon"
                                },
                                {
                                    "name": "Yong Yoon"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "M"
                                    ],
                                    "meetTimeBegin": "6:15 PM",
                                    "meetTimeEnd": "8:10 PM",
                                    "meetPeriodBegin": "11",
                                    "meetPeriodEnd": "E1",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0211"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                        },
                        {
                            "number": "1A76",
                            "classNumber": 12212,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Electronic Circuits 1",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 67.12,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Yong Yoon"
                                },
                                {
                                    "name": "Yong Yoon"
                                },
                                {
                                    "name": "Yong Yoon"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "M"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0211"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                        },
                        {
                            "number": "1A78",
                            "classNumber": 12213,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Electronic Circuits 1",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 67.12,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Yong Yoon"
                                },
                                {
                                    "name": "Yong Yoon"
                                },
                                {
                                    "name": "Yong Yoon"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "F"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0211"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                        },
                        {
                            "number": 5085,
                            "classNumber": 12214,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Electronic Circuits 1",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 67.12,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Yong Yoon"
                                },
                                {
                                    "name": "Yong Yoon"
                                },
                                {
                                    "name": "Yong Yoon"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:20 PM",
                                    "meetTimeEnd": "10:10 PM",
                                    "meetPeriodBegin": "E2",
                                    "meetPeriodEnd": "E3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0211"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                        },
                        {
                            "number": 5086,
                            "classNumber": 12215,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Electronic Circuits 1",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 67.12,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Yong Yoon"
                                },
                                {
                                    "name": "Yong Yoon"
                                },
                                {
                                    "name": "Yong Yoon"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "W"
                                    ],
                                    "meetTimeBegin": "6:15 PM",
                                    "meetTimeEnd": "8:10 PM",
                                    "meetPeriodBegin": "11",
                                    "meetPeriodEnd": "E1",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0211"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                        },
                        {
                            "number": 5088,
                            "classNumber": 12216,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Electronic Circuits 1",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 67.12,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Yong Yoon"
                                },
                                {
                                    "name": "Yong Yoon"
                                },
                                {
                                    "name": "Yong Yoon"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "8:20 PM",
                                    "meetTimeEnd": "10:10 PM",
                                    "meetPeriodBegin": "E2",
                                    "meetPeriodEnd": "E3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0211"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                        }
                    ]
                },
                {
                    "code": "EEE3396C",
                    "courseId": "011723",
                    "name": "Solid-State Electronic Devices",
                    "termInd": " ",
                    "description": "Introduces the principles of semiconductor electron device operation. Laboratory.",
                    "prerequisites": "Prereq: EEL 3008.",
                    "sections": [
                        {
                            "number": 1478,
                            "classNumber": 12244,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Solid State Electron",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 2.75,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Ant Ural"
                                },
                                {
                                    "name": "Ant Ural"
                                },
                                {
                                    "name": "Ant Ural"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "6:15 PM",
                                    "meetTimeEnd": "8:10 PM",
                                    "meetPeriodBegin": "11",
                                    "meetPeriodEnd": "E1",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0289"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 10:00 AM - 12:00 PM"
                        },
                        {
                            "number": "189G",
                            "classNumber": 12245,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Solid State Electron",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 2.75,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Ant Ural"
                                },
                                {
                                    "name": "Ant Ural"
                                },
                                {
                                    "name": "Ant Ural"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "W"
                                    ],
                                    "meetTimeBegin": "8:20 PM",
                                    "meetTimeEnd": "10:10 PM",
                                    "meetPeriodBegin": "E2",
                                    "meetPeriodEnd": "E3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0289"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 10:00 AM - 12:00 PM"
                        },
                        {
                            "number": "1C97",
                            "classNumber": 12246,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Solid State Electron",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 2.75,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Ant Ural"
                                },
                                {
                                    "name": "Ant Ural"
                                },
                                {
                                    "name": "Ant Ural"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "M"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0289"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 10:00 AM - 12:00 PM"
                        }
                    ]
                },
                {
                    "code": "EEE4222",
                    "courseId": "030257",
                    "name": "Resonant MEMS",
                    "termInd": " ",
                    "description": "Fundamentals of resonant micro-electro-mechanical systems (resonant MEMS) and their applications.",
                    "prerequisites": "Prereq: EEL 3135 and EEL 3112 or instructor permission.",
                    "sections": [
                        {
                            "number": "1E57",
                            "classNumber": 12247,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Resonant Mems",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Roozbeh Tabrizian"
                                },
                                {
                                    "name": "Roozbeh Tabrizian"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "12:35 PM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "5",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 12:30 PM - 2:30 PM"
                        }
                    ]
                },
                {
                    "code": "EEE4260C",
                    "courseId": "027060",
                    "name": "Bioelectrical Systems",
                    "termInd": " ",
                    "description": "Covers the theoretical and quantitative perspective of bioelectrical signals reflecting the activity of the brain, the muscles, and the heart. Examines bases of modeling, measuring, processing and analyzing bioelectrical signals and systems, as well as common clinical applications. Laboratory.",
                    "prerequisites": "Prereq: EEL 3008 and EEL3112.",
                    "sections": [
                        {
                            "number": "0797",
                            "classNumber": 12248,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Bioelectrical Systems",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "May Mansy"
                                },
                                {
                                    "name": "Erin Patrick"
                                },
                                {
                                    "name": "Erin Patrick"
                                },
                                {
                                    "name": "May Mansy"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "4:55 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "9",
                                    "meetBuilding": "ROG",
                                    "meetBldgCode": "0474",
                                    "meetRoom": "0110"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "W"
                                    ],
                                    "meetTimeBegin": "8:20 PM",
                                    "meetTimeEnd": "10:10 PM",
                                    "meetPeriodBegin": "E2",
                                    "meetPeriodEnd": "E3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0213B"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 5:30 PM - 7:30 PM"
                        },
                        {
                            "number": "36A9",
                            "classNumber": 21762,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Bioelectrical Systems",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "May Mansy"
                                },
                                {
                                    "name": "Erin Patrick"
                                },
                                {
                                    "name": "Erin Patrick"
                                },
                                {
                                    "name": "May Mansy"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "4:55 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "9",
                                    "meetBuilding": "ROG",
                                    "meetBldgCode": "0474",
                                    "meetRoom": "0110"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "F"
                                    ],
                                    "meetTimeBegin": "11:45 AM",
                                    "meetTimeEnd": "1:40 PM",
                                    "meetPeriodBegin": "5",
                                    "meetPeriodEnd": "6",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0213B"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 5:30 PM - 7:30 PM"
                        }
                    ]
                },
                {
                    "code": "EEE4310",
                    "courseId": "011735",
                    "name": "Digital Integrated Circuits",
                    "termInd": " ",
                    "description": "Analysis and design of digital circuits using MOS and bipolar devices.",
                    "prerequisites": "Prereq: EEE 3308C and EEL3701C.",
                    "sections": [
                        {
                            "number": "045H",
                            "classNumber": 12249,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digital Integ Cicuits",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Domenic Forte"
                                },
                                {
                                    "name": "Domenic Forte"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "5:10 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "10",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "5:10 PM",
                                    "meetTimeEnd": "7:05 PM",
                                    "meetPeriodBegin": "10",
                                    "meetPeriodEnd": "11",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/3/2019 @ 7:30 AM - 9:30 AM"
                        }
                    ]
                },
                {
                    "code": "EEE4404",
                    "courseId": "027556",
                    "name": "Mixed Signal IC Testing I",
                    "termInd": " ",
                    "description": "Fundamentals of testing IC devices and systems: test specifications, parametric training, measurement accuracy, test hardware, sampling theory, digital signal processing based testing, and calibrations. Circuit analysis and design with analog and mixed-signal systems. Labs on testing passive components, LDOs, Op-amps, DACS/ADCs, Mixed-Signal ICs Labview and the National Instruments Savage Tester.",
                    "prerequisites": "Prereq: EEE 3308C and EEL 3701C with minimum grades of C.",
                    "sections": [
                        {
                            "number": "0798",
                            "classNumber": 12250,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Mixed Sig Ic Test I",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "William Eisenstadt"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "12:50 PM",
                                    "meetTimeEnd": "1:40 PM",
                                    "meetPeriodBegin": "6",
                                    "meetPeriodEnd": "6",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "4/29/2019 @ 10:00 AM - 12:00 PM"
                        }
                    ]
                },
                {
                    "code": "EEE4511C",
                    "courseId": "027061",
                    "name": "Real Time Digital Signal Processing Applications",
                    "termInd": " ",
                    "description": "Real world digital signal processing (DSP) tasks are presented and solved in a lab environment that utilizes a Floating Point DSP and a development simulation and hardware emulation tool. Laboratory.",
                    "prerequisites": "Prereq: EEL 3135 and EEL 3744C.",
                    "sections": [
                        {
                            "number": "0892",
                            "classNumber": 12251,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Real Time Dsp Apps",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 153.33,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Karl Gugel"
                                },
                                {
                                    "name": "Karl Gugel"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "3:00 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "8",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "W"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0281"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                        },
                        {
                            "number": "1F73",
                            "classNumber": 12279,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Real Time Dsp Apps",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 153.33,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Karl Gugel"
                                },
                                {
                                    "name": "Karl Gugel"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "3:00 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "8",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "M"
                                    ],
                                    "meetTimeBegin": "6:15 PM",
                                    "meetTimeEnd": "8:10 PM",
                                    "meetPeriodBegin": "11",
                                    "meetPeriodEnd": "E1",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0281"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                        },
                        {
                            "number": "1F74",
                            "classNumber": 12280,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Real Time Dsp Apps",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 153.33,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Karl Gugel"
                                },
                                {
                                    "name": "Karl Gugel"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "3:00 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "8",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "F"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0281"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                        },
                        {
                            "number": "1F84",
                            "classNumber": 12281,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Real Time Dsp Apps",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 153.33,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Karl Gugel"
                                },
                                {
                                    "name": "Karl Gugel"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "3:00 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "8",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:20 PM",
                                    "meetTimeEnd": "10:10 PM",
                                    "meetPeriodBegin": "E2",
                                    "meetPeriodEnd": "E3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0281"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                        },
                        {
                            "number": "1F87",
                            "classNumber": 12282,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Real Time Dsp Apps",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 153.33,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Karl Gugel"
                                },
                                {
                                    "name": "Karl Gugel"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "3:00 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "8",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0281"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                        },
                        {
                            "number": "1F90",
                            "classNumber": 12283,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Real Time Dsp Apps",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 153.33,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Karl Gugel"
                                },
                                {
                                    "name": "Karl Gugel"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "3:00 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "8",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0281"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                        }
                    ]
                },
                {
                    "code": "EEE4714",
                    "courseId": "030245",
                    "name": "Introduction to Hardware Security and Trust",
                    "termInd": " ",
                    "description": "Fundamentals of hardware security and trust for integrated circuits. Cryptographic hardware, invasive and non-invasive attacks, side-channel attacks, physically unclonable functions (PUFs), true random number generation (TRNG), watermarking of Intellectual Property (IP) blocks, FPGA security, counterfeit detection, hardware Trojan detection, and prevention in IP cores and integrated circuits.",
                    "prerequisites": "Prereq: EEL 4712C with minimum grade of C.",
                    "sections": [
                        {
                            "number": "13E5",
                            "classNumber": 12284,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Intro Hw Secur/Trust",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PD",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Mark Tehranipoor"
                                },
                                {
                                    "name": "Mark Tehranipoor"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "3:00 PM",
                                    "meetTimeEnd": "4:55 PM",
                                    "meetPeriodBegin": "8",
                                    "meetPeriodEnd": "9",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0102"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "4:55 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "9",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0102"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 7:30 AM - 9:30 AM"
                        }
                    ]
                },
                {
                    "code": "EEL3000",
                    "courseId": "025713",
                    "name": "Introduction to Electrical and Computer Engineering",
                    "termInd": " ",
                    "description": "Introduces electrical and computer engineering tools, both hardware and software. Professional ethics, career development. Assemble and test hardware project to provide hands-on experience.",
                    "prerequisites": "Prereq: Freshman or sophomore standing in the College of Engineering.",
                    "sections": [
                        {
                            "number": 5131,
                            "classNumber": 12387,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Intro Elec & Comp Eng",
                            "credits": 2,
                            "credits_min": 2,
                            "credits_max": 2,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 23.62,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Henry Zmuda"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "W"
                                    ],
                                    "meetTimeBegin": "3:00 PM",
                                    "meetTimeEnd": "4:55 PM",
                                    "meetPeriodBegin": "8",
                                    "meetPeriodEnd": "9",
                                    "meetBuilding": "WM",
                                    "meetBldgCode": "0100",
                                    "meetRoom": "0100"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                        }
                    ]
                },
                {
                    "code": "EEL3008",
                    "courseId": "027062",
                    "name": "Physics of Electrical Engineering",
                    "termInd": " ",
                    "description": "Introduces the fundamental physics underlying components and devices and their application to electronics, power, and wireless.",
                    "prerequisites": "Credits: 3; Prereq: EEL 3111C, MAC 2313, and MAP 2302.",
                    "sections": [
                        {
                            "number": 1193,
                            "classNumber": 12420,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Physics of Ee",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 9,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Allen Turner"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "TUR",
                                    "meetBldgCode": "0267",
                                    "meetRoom": "L011"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 10:00 AM - 12:00 PM"
                        }
                    ]
                },
                {
                    "code": "EEL3111C",
                    "courseId": "011712",
                    "name": "Circuits 1",
                    "termInd": " ",
                    "description": "Basic analysis of DC and AC electric circuits. Laboratory.",
                    "prerequisites": "Prereq: MAC 2312 and PHY 2049.",
                    "sections": [
                        {
                            "number": "0607",
                            "classNumber": 12421,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Circuits 1",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "This class number will have additional meet times that are scheduled later.",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 37.88,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Allen Turner"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "9:20 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "2",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0101"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 3:00 PM - 5:00 PM"
                        },
                        {
                            "number": "0905",
                            "classNumber": 12422,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Circuits 1",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "This class number will have additional meet times that are scheduled later.",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 37.88,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Mark Sheplak"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0101"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 3:00 PM - 5:00 PM"
                        },
                        {
                            "number": "0926",
                            "classNumber": 12423,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Circuits 1",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "This class number will have additional meet times that are scheduled later.",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 37.88,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Keith Rambo"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "3:00 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "8",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0101"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                        }
                    ]
                },
                {
                    "code": "EEL3112",
                    "courseId": "011713",
                    "name": "Circuits 2",
                    "termInd": " ",
                    "description": "Continuous-time signals and linear systems: Fourier series and transforms, frequency, response, Laplace transform and system function, analog filters; emphasis on electrical circuits. Sampling.",
                    "prerequisites": "Credits: 3; Prereq: EEL 3000, EEL 3111C, EEL 3135 and MAP 2302.",
                    "sections": [
                        {
                            "number": 8194,
                            "classNumber": 12424,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Circuits 2",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Navid Asadi Zanjani"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "11:45 AM",
                                    "meetTimeEnd": "12:35 PM",
                                    "meetPeriodBegin": "5",
                                    "meetPeriodEnd": "5",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "4/30/2019 @ 10:00 AM - 12:00 PM"
                        }
                    ]
                },
                {
                    "code": "EEL3135",
                    "courseId": "011714",
                    "name": "Introduction to Signals and Systems",
                    "termInd": " ",
                    "description": "Continuous-time and discrete-time signal analysis including Fourier series and discrete-time and discrete Fourier transforms; sampling; discrete-time linear system analysis with emphasis on FIR and IIR systems: impulse response, frequency response, and system function; MATLAB-based programming for Signals and Systems.",
                    "prerequisites": "Prereq: MAC 2313.",
                    "sections": [
                        {
                            "number": 2374,
                            "classNumber": 12425,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Intro Signals/Systems",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Sanjeev Koppal"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T",
                                        "R"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0310"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "4/29/2019 @ 12:30 PM - 2:30 PM"
                        },
                        {
                            "number": 2377,
                            "classNumber": 12426,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Intro Signals/Systems",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Joel Harley"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T",
                                        "R"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0310"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/3/2019 @ 12:30 PM - 2:30 PM"
                        }
                    ]
                },
                {
                    "code": "EEL3211C",
                    "courseId": "011715",
                    "name": "Basic Electric Energy Engineering",
                    "termInd": " ",
                    "description": "Analysis and modeling of power system components. Magnetic circuits, energy conservation, transformers, and AC and DC rotating machines. Laboratory.",
                    "prerequisites": "Prereq: EEL 3008.",
                    "sections": [
                        {
                            "number": "048F",
                            "classNumber": 12427,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Basic Electric Energy",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 45,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Keith Rambo"
                                },
                                {
                                    "name": "Keith Rambo"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "4:55 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "9",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0101"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0289"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 5:30 PM - 7:30 PM"
                        },
                        {
                            "number": "1C40",
                            "classNumber": 12428,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Basic Electric Energy",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 45,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Keith Rambo"
                                },
                                {
                                    "name": "Keith Rambo"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "4:55 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "9",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0101"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:20 PM",
                                    "meetTimeEnd": "10:10 PM",
                                    "meetPeriodBegin": "E2",
                                    "meetPeriodEnd": "E3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0289"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 5:30 PM - 7:30 PM"
                        },
                        {
                            "number": "22G4",
                            "classNumber": 12456,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Basic Electric Energy",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 45,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Keith Rambo"
                                },
                                {
                                    "name": "Keith Rambo"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "4:55 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "9",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0101"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "M"
                                    ],
                                    "meetTimeBegin": "8:20 PM",
                                    "meetTimeEnd": "10:10 PM",
                                    "meetPeriodBegin": "E2",
                                    "meetPeriodEnd": "E3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0289"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 5:30 PM - 7:30 PM"
                        }
                    ]
                },
                {
                    "code": "EEL3402",
                    "courseId": "025774",
                    "name": "Remote Sensing in Engineering: Science, Sensors and Applications",
                    "termInd": " ",
                    "description": "Remote sensing theory, systems and applications using information obtained from the visible/near infrared, thermal infrared and microwave regions of the EM spectrum.",
                    "prerequisites": "Prereq: MAP 2302 or equivalent.",
                    "sections": [
                        {
                            "number": "1F14",
                            "classNumber": 12457,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Remote Sensing in Eng",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Jasmeet Judge"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T",
                                        "R"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "12:35 PM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "5",
                                    "meetBuilding": "ROG",
                                    "meetBldgCode": "0474",
                                    "meetRoom": "0283"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 12:30 PM - 2:30 PM"
                        }
                    ]
                },
                {
                    "code": "EEL3472C",
                    "courseId": "011724",
                    "name": "Fundamentals of Electromagnetic Fields",
                    "termInd": " ",
                    "description": "A review of the vector calculus needed for the study of electromagnetic fields and their applications. Both static and dynamic fields are considered, including radiation and propagation both in free space and in waveguide structures. The associated laboratory reinforces the classroom instruction.",
                    "prerequisites": "Prereq: EEL 3008.",
                    "sections": [
                        {
                            "number": "06AG",
                            "classNumber": 12458,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Fund ElectroMAG FLDs",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Vladimir Rakov"
                                },
                                {
                                    "name": "Vladimir Rakov"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "M"
                                    ],
                                    "meetTimeBegin": "8:20 PM",
                                    "meetTimeEnd": "10:10 PM",
                                    "meetPeriodBegin": "E2",
                                    "meetPeriodEnd": "E3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0211"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "4/30/2019 @ 3:00 PM - 5:00 PM"
                        },
                        {
                            "number": "0909",
                            "classNumber": 12459,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Fund ElectroMAG FLDs",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Vladimir Rakov"
                                },
                                {
                                    "name": "Vladimir Rakov"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "6:15 PM",
                                    "meetTimeEnd": "8:10 PM",
                                    "meetPeriodBegin": "11",
                                    "meetPeriodEnd": "E1",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0211"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "4/30/2019 @ 3:00 PM - 5:00 PM"
                        },
                        {
                            "number": 1479,
                            "classNumber": 12462,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Fund ElectroMAG FLDs",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Vladimir Rakov"
                                },
                                {
                                    "name": "Vladimir Rakov"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0211"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "4/30/2019 @ 3:00 PM - 5:00 PM"
                        },
                        {
                            "number": "189F",
                            "classNumber": 12463,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Fund ElectroMAG FLDs",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Vladimir Rakov"
                                },
                                {
                                    "name": "Vladimir Rakov"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0211"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "4/30/2019 @ 3:00 PM - 5:00 PM"
                        }
                    ]
                },
                {
                    "code": "EEL3701C",
                    "courseId": "017114",
                    "name": "Digital Logic and Computer Systems",
                    "termInd": " ",
                    "description": "Overview of logic design, algorithms, computer organization and assembly language programming and computer engineering technology. Laboratory.",
                    "prerequisites": "Prereq: Knowledge of a programming language.",
                    "sections": [
                        {
                            "number": "05EH",
                            "classNumber": 12491,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "M"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                        },
                        {
                            "number": "08D0",
                            "classNumber": 12492,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "M"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                        },
                        {
                            "number": "08ED",
                            "classNumber": 12493,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "M"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                        },
                        {
                            "number": "093E",
                            "classNumber": 12494,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 10:00 AM - 12:00 PM"
                        },
                        {
                            "number": 1249,
                            "classNumber": 12495,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "W"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                        },
                        {
                            "number": 1254,
                            "classNumber": 12496,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "11:45 AM",
                                    "meetTimeEnd": "1:40 PM",
                                    "meetPeriodBegin": "5",
                                    "meetPeriodEnd": "6",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                        },
                        {
                            "number": 1268,
                            "classNumber": 12497,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "W"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                        },
                        {
                            "number": 1277,
                            "classNumber": 12498,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "W"
                                    ],
                                    "meetTimeBegin": "8:20 PM",
                                    "meetTimeEnd": "10:10 PM",
                                    "meetPeriodBegin": "E2",
                                    "meetPeriodEnd": "E3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                        },
                        {
                            "number": 1278,
                            "classNumber": 12525,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "6:15 PM",
                                    "meetTimeEnd": "8:10 PM",
                                    "meetPeriodBegin": "11",
                                    "meetPeriodEnd": "E1",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                        },
                        {
                            "number": "129B",
                            "classNumber": 12526,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "F"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                        },
                        {
                            "number": "129F",
                            "classNumber": 12527,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "F"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                        },
                        {
                            "number": 1482,
                            "classNumber": 12528,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "M"
                                    ],
                                    "meetTimeBegin": "6:15 PM",
                                    "meetTimeEnd": "8:10 PM",
                                    "meetPeriodBegin": "11",
                                    "meetPeriodEnd": "E1",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 10:00 AM - 12:00 PM"
                        },
                        {
                            "number": 1485,
                            "classNumber": 12529,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "11:45 AM",
                                    "meetTimeEnd": "1:40 PM",
                                    "meetPeriodBegin": "5",
                                    "meetPeriodEnd": "6",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 10:00 AM - 12:00 PM"
                        },
                        {
                            "number": "1D04",
                            "classNumber": 12530,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "M"
                                    ],
                                    "meetTimeBegin": "8:20 PM",
                                    "meetTimeEnd": "10:10 PM",
                                    "meetPeriodBegin": "E2",
                                    "meetPeriodEnd": "E3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                        },
                        {
                            "number": "1D55",
                            "classNumber": 12531,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "6:15 PM",
                                    "meetTimeEnd": "8:10 PM",
                                    "meetPeriodBegin": "11",
                                    "meetPeriodEnd": "E1",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                        },
                        {
                            "number": 3147,
                            "classNumber": 12532,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 10:00 AM - 12:00 PM"
                        },
                        {
                            "number": 3155,
                            "classNumber": 12560,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:20 PM",
                                    "meetTimeEnd": "10:10 PM",
                                    "meetPeriodBegin": "E2",
                                    "meetPeriodEnd": "E3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 10:00 AM - 12:00 PM"
                        },
                        {
                            "number": 3177,
                            "classNumber": 12561,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "W"
                                    ],
                                    "meetTimeBegin": "6:15 PM",
                                    "meetTimeEnd": "8:10 PM",
                                    "meetPeriodBegin": "11",
                                    "meetPeriodEnd": "E1",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 10:00 AM - 12:00 PM"
                        },
                        {
                            "number": 3180,
                            "classNumber": 12562,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "W"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 10:00 AM - 12:00 PM"
                        },
                        {
                            "number": 4836,
                            "classNumber": 12563,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 10:00 AM - 12:00 PM"
                        },
                        {
                            "number": 7334,
                            "classNumber": 12564,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 10:00 AM - 12:00 PM"
                        },
                        {
                            "number": 7341,
                            "classNumber": 12565,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "8:20 PM",
                                    "meetTimeEnd": "10:10 PM",
                                    "meetPeriodBegin": "E2",
                                    "meetPeriodEnd": "E3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 10:00 AM - 12:00 PM"
                        },
                        {
                            "number": 7441,
                            "classNumber": 12566,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "F"
                                    ],
                                    "meetTimeBegin": "11:45 AM",
                                    "meetTimeEnd": "1:40 PM",
                                    "meetPeriodBegin": "5",
                                    "meetPeriodEnd": "6",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 10:00 AM - 12:00 PM"
                        },
                        {
                            "number": 7448,
                            "classNumber": 12567,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digit Logic/Compu Sys",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 89.4,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "FLG",
                                    "meetBldgCode": "0021",
                                    "meetRoom": "0270"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "F"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0248"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 10:00 AM - 12:00 PM"
                        }
                    ]
                },
                {
                    "code": "EEL3744C",
                    "courseId": "011753",
                    "name": "Microprocessor Applications",
                    "termInd": " ",
                    "description": "Experience in the elements of microprocessor-based systems, hardware interfacing and software design for their application. Laboratory.",
                    "prerequisites": "Prereq: EEL 3701C.",
                    "sections": [
                        {
                            "number": "112D",
                            "classNumber": 12595,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Microprocessor Applic",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 112.04,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "12:35 PM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "5",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0281"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 12:30 PM - 2:30 PM"
                        },
                        {
                            "number": 1450,
                            "classNumber": 12597,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Microprocessor Applic",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 112.04,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "12:35 PM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "5",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "12:50 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "6",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0281"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 12:30 PM - 2:30 PM"
                        },
                        {
                            "number": "1D34",
                            "classNumber": 12599,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Microprocessor Applic",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 112.04,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "12:35 PM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "5",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "6:15 PM",
                                    "meetTimeEnd": "8:10 PM",
                                    "meetPeriodBegin": "11",
                                    "meetPeriodEnd": "E1",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0281"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 12:30 PM - 2:30 PM"
                        },
                        {
                            "number": "1D35",
                            "classNumber": 12600,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Microprocessor Applic",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 112.04,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "12:35 PM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "5",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "F"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "12:35 PM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "5",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0281"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 12:30 PM - 2:30 PM"
                        },
                        {
                            "number": "1F93",
                            "classNumber": 12601,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Microprocessor Applic",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 112.04,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "12:35 PM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "5",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "W"
                                    ],
                                    "meetTimeBegin": "8:20 PM",
                                    "meetTimeEnd": "10:10 PM",
                                    "meetPeriodBegin": "E2",
                                    "meetPeriodEnd": "E3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0281"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 12:30 PM - 2:30 PM"
                        },
                        {
                            "number": "1F95",
                            "classNumber": 12602,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Microprocessor Applic",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 112.04,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "12:35 PM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "5",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "8:20 PM",
                                    "meetTimeEnd": "10:10 PM",
                                    "meetPeriodBegin": "E2",
                                    "meetPeriodEnd": "E3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0281"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 12:30 PM - 2:30 PM"
                        },
                        {
                            "number": "1F98",
                            "classNumber": 12630,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Microprocessor Applic",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 112.04,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "12:35 PM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "5",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "W"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0281"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 12:30 PM - 2:30 PM"
                        },
                        {
                            "number": "26AF",
                            "classNumber": 12631,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Microprocessor Applic",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 112.04,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "12:35 PM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "5",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "F"
                                    ],
                                    "meetTimeBegin": "12:50 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "6",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0281"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 12:30 PM - 2:30 PM"
                        },
                        {
                            "number": "26AG",
                            "classNumber": 12632,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Microprocessor Applic",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 112.04,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "12:35 PM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "5",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "M"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0281"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 12:30 PM - 2:30 PM"
                        },
                        {
                            "number": "26AH",
                            "classNumber": 12633,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Microprocessor Applic",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 112.04,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                },
                                {
                                    "name": "Eric Schwartz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "12:35 PM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "5",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "W"
                                    ],
                                    "meetTimeBegin": "6:15 PM",
                                    "meetTimeEnd": "8:10 PM",
                                    "meetPeriodBegin": "11",
                                    "meetPeriodEnd": "E1",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0281"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 12:30 PM - 2:30 PM"
                        }
                    ]
                },
                {
                    "code": "EEL3834",
                    "courseId": "023633",
                    "name": "Programming for Electrical and Computer Engineers",
                    "termInd": " ",
                    "description": "Develops computer skills and the art of writing sound computer programs using examples and exercises relevant to electrical and computer engineering.",
                    "prerequisites": "",
                    "sections": [
                        {
                            "number": "2D96",
                            "classNumber": 12634,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Programming for Ece",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Kwansun Cho"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "12:50 PM",
                                    "meetTimeEnd": "1:40 PM",
                                    "meetPeriodBegin": "6",
                                    "meetPeriodEnd": "6",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0310"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "4/29/2019 @ 10:00 AM - 12:00 PM"
                        }
                    ]
                },
                {
                    "code": "EEL3923C",
                    "courseId": "025588",
                    "name": "Electrical Engineering Design 1",
                    "termInd": " ",
                    "description": "Teams design, produce and report on a hardware prototype, meeting defined specifications and using a structured design methodology. Includes project management, hardware prototyping and project reporting.",
                    "prerequisites": "Credits: 3; Prereq: EEE 3008, EEL 3112, EEL 3744C and 1 course from breadth elective list.",
                    "sections": [
                        {
                            "number": 1010,
                            "classNumber": 12635,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Elec Engr Design 1",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "Students will receive an email from the instructor regarding   meet times for course",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 153,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Allen Turner"
                                },
                                {
                                    "name": "Michael Stapleton"
                                }
                            ],
                            "meetTimes": [],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": ""
                        }
                    ]
                },
                {
                    "code": "EEL4271",
                    "courseId": "030262",
                    "name": "Power System Protection",
                    "termInd": " ",
                    "description": "Power systems protection analytical methodologies and algorithms. Analyzes different methods for equipment and systems protection and discusses wide-area monitoring techniques, which allow real-time operation and control. Introduces cyber-physical security approaches for the smart grid and realizes numerical construction of protection methods considering realistic engineering hypothesis.",
                    "prerequisites": "Prereq: EEL 4251 or instructor permission.",
                    "sections": [
                        {
                            "number": "101E",
                            "classNumber": 12636,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Power Sys Protection",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Arturo Bretas"
                                },
                                {
                                    "name": "Arturo Bretas"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "BEN",
                                    "meetBldgCode": "0721",
                                    "meetRoom": "0328"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "BEN",
                                    "meetBldgCode": "0721",
                                    "meetRoom": "0328"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 10:00 AM - 12:00 PM"
                        }
                    ]
                },
                {
                    "code": "EEL4461",
                    "courseId": "011744",
                    "name": "Antenna Systems",
                    "termInd": " ",
                    "description": "Electromagnetic field theory and its application to antenna design.",
                    "prerequisites": "Prereq: EEL 3472C.",
                    "sections": [
                        {
                            "number": "36CE",
                            "classNumber": 21771,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Antenna Systems",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Joaquin Casanova"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "4:55 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "9",
                                    "meetBuilding": "BEN",
                                    "meetBldgCode": "0721",
                                    "meetRoom": "0328"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 5:30 PM - 7:30 PM"
                        }
                    ]
                },
                {
                    "code": "EEL4473",
                    "courseId": "011725",
                    "name": "Electromagnetic Fields and Applications",
                    "termInd": " ",
                    "description": "Rigorously develops the properties of electric and magnetic fields. Maxwell’s Equations form the foundation for understanding the fundamental nature and application-driven aspect of static and dynamic fields and their derivation from scalar and vector potentials. Fields in media is examined along with energy considerations and propagation effects.",
                    "prerequisites": "Prereq: EEL 3472C.",
                    "sections": [
                        {
                            "number": "0194",
                            "classNumber": 12637,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Electromag Flds Apps",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Martin Uman"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "BEN",
                                    "meetBldgCode": "0721",
                                    "meetRoom": "0328"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 10:00 AM - 12:00 PM"
                        }
                    ]
                },
                {
                    "code": "EEL4514C",
                    "courseId": "011746",
                    "name": "Communication Systems and Components",
                    "termInd": " ",
                    "description": "Theory of communication and applications to radio, television, telephone, satellite, cellular telephone, spread spectrum and computer communication systems. Laboratory.",
                    "prerequisites": "Prereq: EEL 3112.",
                    "sections": [
                        {
                            "number": "13HA",
                            "classNumber": 12665,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Comm Sys and Comp",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 26,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Tan Wong"
                                },
                                {
                                    "name": "Tan Wong"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "5:10 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "10",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0211"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 8:00 PM - 10:00 PM"
                        },
                        {
                            "number": 1504,
                            "classNumber": 12666,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Comm Sys and Comp",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 26,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Tan Wong"
                                },
                                {
                                    "name": "Tan Wong"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "5:10 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "10",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "W"
                                    ],
                                    "meetTimeBegin": "8:20 PM",
                                    "meetTimeEnd": "10:10 PM",
                                    "meetPeriodBegin": "E2",
                                    "meetPeriodEnd": "E3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0211"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 8:00 PM - 10:00 PM"
                        },
                        {
                            "number": "1A68",
                            "classNumber": 12667,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Comm Sys and Comp",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 26,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Tan Wong"
                                },
                                {
                                    "name": "Tan Wong"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "5:10 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "10",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "F"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0211"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 8:00 PM - 10:00 PM"
                        },
                        {
                            "number": "221E",
                            "classNumber": 12668,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Comm Sys and Comp",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 26,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Tan Wong"
                                },
                                {
                                    "name": "Tan Wong"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "5:10 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "10",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0202"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "6:15 PM",
                                    "meetTimeEnd": "8:10 PM",
                                    "meetPeriodBegin": "11",
                                    "meetPeriodEnd": "E1",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0211"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 8:00 PM - 10:00 PM"
                        }
                    ]
                },
                {
                    "code": "EEL4540",
                    "courseId": "027216",
                    "name": "Introduction to Radar",
                    "termInd": " ",
                    "description": "Basic principles of cw and pulsed radar; angle, range, and Doppler tracking; accuracy and resolution; signal design.",
                    "prerequisites": "Prereq: EEL 4514.",
                    "sections": [
                        {
                            "number": "02GE",
                            "classNumber": 12669,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Departmentally Controlled",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "AD",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Steven Butler"
                                }
                            ],
                            "meetTimes": [],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": ""
                        }
                    ]
                },
                {
                    "code": "EEL4599",
                    "courseId": "026955",
                    "name": "Wireless and Mobile Networks",
                    "termInd": " ",
                    "description": "Senior-level study of wireless and mobile networks. Investigates telecommunication architectures and protocols for wireless sensor networks and wireless embedded systems; Wi-Fi and wireless local area networks; mobile ad-hoc networks; next generation cellular systems and satellite networks.",
                    "prerequisites": "Prereq: EEL 3701C.",
                    "sections": [
                        {
                            "number": "1B32",
                            "classNumber": 12670,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Wireless and Mobile Net",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Janise Mcnair"
                                },
                                {
                                    "name": "Janise Mcnair"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "MAEA",
                                    "meetBldgCode": "0725",
                                    "meetRoom": "0327"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "MAEA",
                                    "meetBldgCode": "0725",
                                    "meetRoom": "0327"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 10:00 AM - 12:00 PM"
                        }
                    ]
                },
                {
                    "code": "EEL4610",
                    "courseId": "030264",
                    "name": "State Variable Methods in Linear Systems",
                    "termInd": " ",
                    "description": "Development of state-variable approach to linear continuous-time and discrete-time systems with emphasis on the design of feedback control systems.",
                    "prerequisites": "Prereq: EEL 4657C.",
                    "sections": [
                        {
                            "number": "106H",
                            "classNumber": 12671,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "State Var Methods",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Jacob Hammer"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "3:00 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "8",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "BEN",
                                    "meetBldgCode": "0721",
                                    "meetRoom": "0328"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                        }
                    ]
                },
                {
                    "code": "EEL4657C",
                    "courseId": "011749",
                    "name": "Linear Control Systems",
                    "termInd": " ",
                    "description": "Theory and design of linear control systems.  Laboratory.",
                    "prerequisites": "Prereq: EEL 3112 and EEL 3744C.",
                    "sections": [
                        {
                            "number": "3C59",
                            "classNumber": 12151,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Linear Control System",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 160,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Zoleikha Abdollahi Biron"
                                },
                                {
                                    "name": "Haniph Latchman"
                                },
                                {
                                    "name": "Zoleikha Abdollahi Biron"
                                },
                                {
                                    "name": "Haniph Latchman"
                                },
                                {
                                    "name": "Zoleikha Abdollahi Biron"
                                },
                                {
                                    "name": "Haniph Latchman"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "3:00 PM",
                                    "meetTimeEnd": "4:55 PM",
                                    "meetPeriodBegin": "8",
                                    "meetPeriodEnd": "9",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0101"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "4:55 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "9",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0101"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "W"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0289"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 7:30 AM - 9:30 AM"
                        },
                        {
                            "number": "3C60",
                            "classNumber": 12152,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Linear Control System",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 160,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Zoleikha Abdollahi Biron"
                                },
                                {
                                    "name": "Haniph Latchman"
                                },
                                {
                                    "name": "Zoleikha Abdollahi Biron"
                                },
                                {
                                    "name": "Haniph Latchman"
                                },
                                {
                                    "name": "Zoleikha Abdollahi Biron"
                                },
                                {
                                    "name": "Haniph Latchman"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "3:00 PM",
                                    "meetTimeEnd": "4:55 PM",
                                    "meetPeriodBegin": "8",
                                    "meetPeriodEnd": "9",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0101"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "4:55 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "9",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0101"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0289"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 7:30 AM - 9:30 AM"
                        }
                    ]
                },
                {
                    "code": "EEL4712C",
                    "courseId": "011750",
                    "name": "Digital Design",
                    "termInd": " ",
                    "description": "Advanced modular logic design, design languages, finite state machines and binary logic. Laboratory.",
                    "prerequisites": "Prereq: EEL 3701C.",
                    "sections": [
                        {
                            "number": "11F9",
                            "classNumber": 12153,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digital Design",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 57.6,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Greg Stitt"
                                },
                                {
                                    "name": "Greg Stitt"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "9:20 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "2",
                                    "meetBuilding": "MCCA",
                                    "meetBldgCode": "0495",
                                    "meetRoom": "G186"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "M"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0213B"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 3:00 PM - 5:00 PM"
                        },
                        {
                            "number": "131C",
                            "classNumber": 12154,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digital Design",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 57.6,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Greg Stitt"
                                },
                                {
                                    "name": "Greg Stitt"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "9:20 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "2",
                                    "meetBuilding": "MCCA",
                                    "meetBldgCode": "0495",
                                    "meetRoom": "G186"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "M"
                                    ],
                                    "meetTimeBegin": "6:15 PM",
                                    "meetTimeEnd": "8:10 PM",
                                    "meetPeriodBegin": "11",
                                    "meetPeriodEnd": "E1",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0213B"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 3:00 PM - 5:00 PM"
                        },
                        {
                            "number": 1516,
                            "classNumber": 12155,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digital Design",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 57.6,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Greg Stitt"
                                },
                                {
                                    "name": "Greg Stitt"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "9:20 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "2",
                                    "meetBuilding": "MCCA",
                                    "meetBldgCode": "0495",
                                    "meetRoom": "G186"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "M"
                                    ],
                                    "meetTimeBegin": "8:20 PM",
                                    "meetTimeEnd": "10:10 PM",
                                    "meetPeriodBegin": "E2",
                                    "meetPeriodEnd": "E3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0213B"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 3:00 PM - 5:00 PM"
                        },
                        {
                            "number": 1517,
                            "classNumber": 12183,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digital Design",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 57.6,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Greg Stitt"
                                },
                                {
                                    "name": "Greg Stitt"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "9:20 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "2",
                                    "meetBuilding": "MCCA",
                                    "meetBldgCode": "0495",
                                    "meetRoom": "G186"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0213B"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 3:00 PM - 5:00 PM"
                        },
                        {
                            "number": 1518,
                            "classNumber": 12184,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digital Design",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 57.6,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Greg Stitt"
                                },
                                {
                                    "name": "Greg Stitt"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "9:20 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "2",
                                    "meetBuilding": "MCCA",
                                    "meetBldgCode": "0495",
                                    "meetRoom": "G186"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:20 PM",
                                    "meetTimeEnd": "10:10 PM",
                                    "meetPeriodBegin": "E2",
                                    "meetPeriodEnd": "E3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0213B"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 3:00 PM - 5:00 PM"
                        },
                        {
                            "number": 1519,
                            "classNumber": 12185,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digital Design",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 57.6,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Greg Stitt"
                                },
                                {
                                    "name": "Greg Stitt"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "9:20 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "2",
                                    "meetBuilding": "MCCA",
                                    "meetBldgCode": "0495",
                                    "meetRoom": "G186"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "W"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0213B"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 3:00 PM - 5:00 PM"
                        },
                        {
                            "number": "16H1",
                            "classNumber": 12186,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digital Design",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 57.6,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Greg Stitt"
                                },
                                {
                                    "name": "Greg Stitt"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "9:20 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "2",
                                    "meetBuilding": "MCCA",
                                    "meetBldgCode": "0495",
                                    "meetRoom": "G186"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0213B"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 3:00 PM - 5:00 PM"
                        },
                        {
                            "number": "16HF",
                            "classNumber": 12187,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digital Design",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 57.6,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Greg Stitt"
                                },
                                {
                                    "name": "Greg Stitt"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "9:20 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "2",
                                    "meetBuilding": "MCCA",
                                    "meetBldgCode": "0495",
                                    "meetRoom": "G186"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "F"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0213B"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 3:00 PM - 5:00 PM"
                        },
                        {
                            "number": "16HH",
                            "classNumber": 12188,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digital Design",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 57.6,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Greg Stitt"
                                },
                                {
                                    "name": "Greg Stitt"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "9:20 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "2",
                                    "meetBuilding": "MCCA",
                                    "meetBldgCode": "0495",
                                    "meetRoom": "G186"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "W"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0213B"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 3:00 PM - 5:00 PM"
                        },
                        {
                            "number": "23G7",
                            "classNumber": 12189,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digital Design",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 57.6,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Greg Stitt"
                                },
                                {
                                    "name": "Greg Stitt"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "9:20 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "2",
                                    "meetBuilding": "MCCA",
                                    "meetBldgCode": "0495",
                                    "meetRoom": "G186"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "W"
                                    ],
                                    "meetTimeBegin": "6:15 PM",
                                    "meetTimeEnd": "8:10 PM",
                                    "meetPeriodBegin": "11",
                                    "meetPeriodEnd": "E1",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0213B"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 3:00 PM - 5:00 PM"
                        },
                        {
                            "number": 4362,
                            "classNumber": 12190,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digital Design",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 57.6,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Greg Stitt"
                                },
                                {
                                    "name": "Greg Stitt"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "9:20 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "2",
                                    "meetBuilding": "MCCA",
                                    "meetBldgCode": "0495",
                                    "meetRoom": "G186"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "F"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0213B"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 3:00 PM - 5:00 PM"
                        },
                        {
                            "number": 4718,
                            "classNumber": 12217,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digital Design",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 57.6,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Greg Stitt"
                                },
                                {
                                    "name": "Greg Stitt"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "9:20 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "2",
                                    "meetBuilding": "MCCA",
                                    "meetBldgCode": "0495",
                                    "meetRoom": "G186"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0213B"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 3:00 PM - 5:00 PM"
                        },
                        {
                            "number": 4719,
                            "classNumber": 12218,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digital Design",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 57.6,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Greg Stitt"
                                },
                                {
                                    "name": "Greg Stitt"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "9:20 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "2",
                                    "meetBuilding": "MCCA",
                                    "meetBldgCode": "0495",
                                    "meetRoom": "G186"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "6:15 PM",
                                    "meetTimeEnd": "8:10 PM",
                                    "meetPeriodBegin": "11",
                                    "meetPeriodEnd": "E1",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0213B"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 3:00 PM - 5:00 PM"
                        },
                        {
                            "number": 5748,
                            "classNumber": 12219,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digital Design",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 57.6,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Greg Stitt"
                                },
                                {
                                    "name": "Greg Stitt"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "9:20 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "2",
                                    "meetBuilding": "MCCA",
                                    "meetBldgCode": "0495",
                                    "meetRoom": "G186"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "8:20 PM",
                                    "meetTimeEnd": "10:10 PM",
                                    "meetPeriodBegin": "E2",
                                    "meetPeriodEnd": "E3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0213B"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 3:00 PM - 5:00 PM"
                        },
                        {
                            "number": 6857,
                            "classNumber": 12220,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Digital Design",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 57.6,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Greg Stitt"
                                },
                                {
                                    "name": "Greg Stitt"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "9:20 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "2",
                                    "meetBuilding": "MCCA",
                                    "meetBldgCode": "0495",
                                    "meetRoom": "G186"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "F"
                                    ],
                                    "meetTimeBegin": "4:05 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "9",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0213B"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 3:00 PM - 5:00 PM"
                        }
                    ]
                },
                {
                    "code": "EEL4720",
                    "courseId": "026370",
                    "name": "Reconfigurable Computing",
                    "termInd": " ",
                    "description": "Fundamental concepts at advanced undergraduate level in reconfigurable computing based upon advanced technologies in field-programmable logic devices. Topics include general concepts, device architectures, design tools, metrics and kernels, system architectures and application case studies.",
                    "prerequisites": "Prereq: EEL 4712C.",
                    "sections": [
                        {
                            "number": "09BC",
                            "classNumber": 12223,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Reconfigurable Comp",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Herman Lam"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0239"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 10:00 AM - 12:00 PM"
                        }
                    ]
                },
                {
                    "code": "EEL4732",
                    "courseId": "030265",
                    "name": "Advanced Systems Programming",
                    "termInd": " ",
                    "description": "Develop a deep understanding of operating system concepts and systems programming fundamentals and gain hands-on experience in systems programming by using Pthreads as well as implementing Linux device drivers and testing/verifying systems code for deadlock and race-freedom.",
                    "prerequisites": "Credits: 3; Prereq: EEL 3701C, EEL 3834, and COP 4600 or equivalent.",
                    "sections": [
                        {
                            "number": 1315,
                            "classNumber": 12224,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Adv. Systems Prog.",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PD",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Tuba Yavuz"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0102"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 3:00 PM - 5:00 PM"
                        }
                    ]
                },
                {
                    "code": "EEL4853",
                    "courseId": "030266",
                    "name": "Cross Layered System Security",
                    "termInd": " ",
                    "description": "Develop an understanding of the principles of computer security, as it crosses layers of abstraction (application, operating system, hardware, and network). Learn the challenges of building secure computer systems with examples and hands-on assignments. Current research on these challenges will be discussed. Students will review and present conference papers.",
                    "prerequisites": "Prereq: EEL 3834 or equivalent and EEL 4736 or equivalent.",
                    "sections": [
                        {
                            "number": "13H7",
                            "classNumber": 12253,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Cross Layered Sys Sec",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PD",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Daniela Oliveira"
                                },
                                {
                                    "name": "Daniela Oliveira"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "8:30 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "2",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "CSE",
                                    "meetBldgCode": "0042",
                                    "meetRoom": "E107"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "CSE",
                                    "meetBldgCode": "0042",
                                    "meetRoom": "E107"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                        }
                    ]
                },
                {
                    "code": "EEL4913",
                    "courseId": "022637",
                    "name": "Integrated Product and Process Design 2",
                    "termInd": " ",
                    "description": "Second part of two in which multidisciplinary teams of engineering and business students partner with industry sponsors to design and build authentic products and processes, on time and within budget. Working closely with industry liaison engineers and a faculty coach, students gain practical experience in teamwork and communication, problem solving and engineering design, and develop leadership, management and people skills.",
                    "prerequisites": "Prereq: EEL 4912.",
                    "sections": [
                        {
                            "number": "09FE",
                            "classNumber": 12255,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Departmentally Controlled",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Rodney Guico"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "3:00 PM",
                                    "meetTimeEnd": "6:00 PM",
                                    "meetPeriodBegin": "8",
                                    "meetPeriodEnd": "10",
                                    "meetBuilding": "PUGH",
                                    "meetBldgCode": "0072",
                                    "meetRoom": 170
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 7:30 AM - 9:30 AM"
                        }
                    ]
                },
                {
                    "code": "EEL4924C",
                    "courseId": "011755",
                    "name": "Electrical Engineering Design 2",
                    "termInd": " ",
                    "description": "Selected design projects involving engineering applications in the various areas of electrical engineering.  Laboratory.",
                    "prerequisites": "Credits: 3; Prereq: EEL 3923C, two courses from the breadth elective list, and one course from depth elective list.",
                    "sections": [
                        {
                            "number": 1534,
                            "classNumber": 12256,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Elec Engr Design 2",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "ELEC ENGR DESIGN 2",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 130,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Karl Gugel"
                                },
                                {
                                    "name": "Michael Stapleton"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "2:45 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "7",
                                    "meetBuilding": "MAEA",
                                    "meetBldgCode": "0725",
                                    "meetRoom": "0303"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "4/30/2019 @ 3:00 PM - 5:00 PM"
                        },
                        {
                            "number": "181D",
                            "classNumber": 12257,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Elec Engr Design 2",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "ELEC ENGR DESIGN 2",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 130,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Karl Gugel"
                                },
                                {
                                    "name": "Michael Stapleton"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0330"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 3:00 PM - 5:00 PM"
                        }
                    ]
                },
                {
                    "code": "EEL4930",
                    "courseId": "017670",
                    "name": "Special Topics in Electrical Engineering",
                    "termInd": " ",
                    "description": "Special courses covering selected topics in electrical engineering.",
                    "prerequisites": "",
                    "sections": [
                        {
                            "number": 1954,
                            "classNumber": 12258,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Spec Top Elect Eng",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "MACHINE LEARNING",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Alina Glenn"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T",
                                        "R"
                                    ],
                                    "meetTimeBegin": "1:55 PM",
                                    "meetTimeEnd": "3:50 PM",
                                    "meetPeriodBegin": "7",
                                    "meetPeriodEnd": "8",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0310"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 10:00 AM - 12:00 PM"
                        },
                        {
                            "number": "1A24",
                            "classNumber": 12259,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Spec Top Elect Eng",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "MDRN MEMORY DEV TECH",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Jing Guo"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "11:45 AM",
                                    "meetTimeEnd": "12:35 PM",
                                    "meetPeriodBegin": "5",
                                    "meetPeriodEnd": "5",
                                    "meetBuilding": "BEN",
                                    "meetBldgCode": "0721",
                                    "meetRoom": "0328"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "4/30/2019 @ 10:00 AM - 12:00 PM"
                        },
                        {
                            "number": "1G56",
                            "classNumber": 12287,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Spec Top Elect Eng",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "STATISTICS FOR ECE",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "John Shea"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M",
                                        "W",
                                        "F"
                                    ],
                                    "meetTimeBegin": "9:35 AM",
                                    "meetTimeEnd": "10:25 AM",
                                    "meetPeriodBegin": "3",
                                    "meetPeriodEnd": "3",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0239"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 3:00 PM - 5:00 PM"
                        },
                        {
                            "number": "1H39",
                            "classNumber": 12288,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Spec Top Elect Eng",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "MICROPRO APPS II",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Yier Jin"
                                },
                                {
                                    "name": "Yier Jin"
                                },
                                {
                                    "name": "Yier Jin"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "MAEA",
                                    "meetBldgCode": "0725",
                                    "meetRoom": "0327"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "12:35 PM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "5",
                                    "meetBuilding": "MAEA",
                                    "meetBldgCode": "0725",
                                    "meetRoom": "0327"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "M"
                                    ],
                                    "meetTimeBegin": "8:20 PM",
                                    "meetTimeEnd": "10:10 PM",
                                    "meetPeriodBegin": "E2",
                                    "meetPeriodEnd": "E3",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0281"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 12:30 PM - 2:30 PM"
                        },
                        {
                            "number": "1H42",
                            "classNumber": 12289,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Spec Top Elect Eng",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "MICROPRO APPS II",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Yier Jin"
                                },
                                {
                                    "name": "Yier Jin"
                                },
                                {
                                    "name": "Yier Jin"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "MAEA",
                                    "meetBldgCode": "0725",
                                    "meetRoom": "0327"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "12:35 PM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "5",
                                    "meetBuilding": "MAEA",
                                    "meetBldgCode": "0725",
                                    "meetRoom": "0327"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "6:15 PM",
                                    "meetTimeEnd": "8:10 PM",
                                    "meetPeriodBegin": "11",
                                    "meetPeriodEnd": "E1",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0281"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 12:30 PM - 2:30 PM"
                        },
                        {
                            "number": "1H46",
                            "classNumber": 12290,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Spec Top Elect Eng",
                            "credits": 4,
                            "credits_min": 4,
                            "credits_max": 4,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "MICROPRO APPS II",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Yier Jin"
                                },
                                {
                                    "name": "Yier Jin"
                                },
                                {
                                    "name": "Yier Jin"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "MAEA",
                                    "meetBldgCode": "0725",
                                    "meetRoom": "0327"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "12:35 PM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "5",
                                    "meetBuilding": "MAEA",
                                    "meetBldgCode": "0725",
                                    "meetRoom": "0327"
                                },
                                {
                                    "meetNo": 3,
                                    "meetDays": [
                                        "F"
                                    ],
                                    "meetTimeBegin": "3:00 PM",
                                    "meetTimeEnd": "4:55 PM",
                                    "meetPeriodBegin": "8",
                                    "meetPeriodEnd": "9",
                                    "meetBuilding": "NEB",
                                    "meetBldgCode": "0033",
                                    "meetRoom": "0281"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 12:30 PM - 2:30 PM"
                        },
                        {
                            "number": 2308,
                            "classNumber": 12291,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Spec Top Elect Eng",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "NEURAL SIG, SYS & TEC",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Karim Oweiss"
                                },
                                {
                                    "name": "Karim Oweiss"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "T"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "11:30 AM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "4",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0239"
                                },
                                {
                                    "meetNo": 2,
                                    "meetDays": [
                                        "R"
                                    ],
                                    "meetTimeBegin": "10:40 AM",
                                    "meetTimeEnd": "12:35 PM",
                                    "meetPeriodBegin": "4",
                                    "meetPeriodEnd": "5",
                                    "meetBuilding": "LAR",
                                    "meetBldgCode": "0722",
                                    "meetRoom": "0239"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/2/2019 @ 12:30 PM - 2:30 PM"
                        },
                        {
                            "number": "401D",
                            "classNumber": 22749,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Departmentally Controlled",
                            "credits": 3,
                            "credits_min": 3,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "INTEGRATED PHOTONICS",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "Henry Zmuda"
                                }
                            ],
                            "meetTimes": [],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": ""
                        }
                    ]
                },
                {
                    "code": "EEL4948",
                    "courseId": "022521",
                    "name": "Practical Work in Electrical and Computer Engineering",
                    "termInd": " ",
                    "description": "One term industrial employment, including extra work according to a pre-approved outline. Practical engineering work under industrial supervision, as set forth in the Herbert Wertheim College of Engineering regulations. (S-U)",
                    "prerequisites": "Prereq: 3EG classification.",
                    "sections": [
                        {
                            "number": "25GB",
                            "classNumber": 12292,
                            "gradBasis": "SUS",
                            "acadCareer": "UGRD",
                            "display": "Departmentally Controlled",
                            "credits": 1,
                            "credits_min": 1,
                            "credits_max": 1,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "N",
                            "LMS": "",
                            "instructors": [],
                            "meetTimes": [],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": ""
                        }
                    ]
                },
                {
                    "code": "EEL4949",
                    "courseId": "011758",
                    "name": "Co-op Work Experience",
                    "termInd": " ",
                    "description": "Practical co-op engineering work under approved industrial supervision. (S-U)",
                    "prerequisites": "Prereq: EG classification.",
                    "sections": [
                        {
                            "number": "272A",
                            "classNumber": 12293,
                            "gradBasis": "SUS",
                            "acadCareer": "UGRD",
                            "display": "Departmentally Controlled",
                            "credits": 1,
                            "credits_min": 1,
                            "credits_max": 1,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "N",
                            "LMS": "",
                            "instructors": [],
                            "meetTimes": [],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": ""
                        }
                    ]
                },
                {
                    "code": "EGN1935",
                    "courseId": "024945",
                    "name": "Special Topics in Freshman Engineering",
                    "termInd": " ",
                    "description": "Laboratory, lectures or conferences cover selected topics in engineering.",
                    "prerequisites": "",
                    "sections": [
                        {
                            "number": "119E",
                            "classNumber": 14090,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Freshman Engineering",
                            "credits": 2,
                            "credits_min": 2,
                            "credits_max": 2,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "ECE ADVENTURES",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "John Harris"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M"
                                    ],
                                    "meetTimeBegin": "3:00 PM",
                                    "meetTimeEnd": "4:55 PM",
                                    "meetPeriodBegin": "8",
                                    "meetPeriodEnd": "9",
                                    "meetBuilding": "FLI",
                                    "meetBldgCode": "0008",
                                    "meetRoom": "0101"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                        },
                        {
                            "number": "12AF",
                            "classNumber": 14091,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Freshman Engineering",
                            "credits": 2,
                            "credits_min": 2,
                            "credits_max": 2,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "ECE ADVENTURES",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "John Harris"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M"
                                    ],
                                    "meetTimeBegin": "3:00 PM",
                                    "meetTimeEnd": "4:55 PM",
                                    "meetPeriodBegin": "8",
                                    "meetPeriodEnd": "9",
                                    "meetBuilding": "FLI",
                                    "meetBldgCode": "0008",
                                    "meetRoom": "0101"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                        },
                        {
                            "number": 1941,
                            "classNumber": 14092,
                            "gradBasis": "GRD",
                            "acadCareer": "UGRD",
                            "display": "Freshman Engineering",
                            "credits": 2,
                            "credits_min": 2,
                            "credits_max": 2,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "ECE ADVENTURES",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "Y",
                            "LMS": "",
                            "instructors": [
                                {
                                    "name": "John Harris"
                                }
                            ],
                            "meetTimes": [
                                {
                                    "meetNo": 1,
                                    "meetDays": [
                                        "M"
                                    ],
                                    "meetTimeBegin": "3:00 PM",
                                    "meetTimeEnd": "4:55 PM",
                                    "meetPeriodBegin": "8",
                                    "meetPeriodEnd": "9",
                                    "meetBuilding": "FLI",
                                    "meetBldgCode": "0008",
                                    "meetRoom": "0101"
                                }
                            ],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                        }
                    ]
                },
                {
                    "code": "EGN4912",
                    "courseId": "026625",
                    "name": "Engineering Directed Independent Research",
                    "termInd": " ",
                    "description": "Provides firsthand, supervised research with a faculty advisor or postdoctoral or graduate student mentor. Projects may involve inquiry, design, investigation, scholarship, discovery or application. (S-U)",
                    "prerequisites": "",
                    "sections": [
                        {
                            "number": 2063,
                            "classNumber": 14165,
                            "gradBasis": "SUS",
                            "acadCareer": "UGRD",
                            "display": "Departmentally Controlled",
                            "credits": "VAR",
                            "credits_min": 0,
                            "credits_max": 3,
                            "note": "",
                            "dNote": "",
                            "genEd": [],
                            "sectWeb": "PC",
                            "rotateTitle": "ENGINEERING RESEARCH",
                            "deptCode": 19050000,
                            "deptName": "Electrical and Computer Engineering",
                            "courseFee": 0,
                            "lateFlag": "N",
                            "EEP": "N",
                            "LMS": "",
                            "instructors": [],
                            "meetTimes": [],
                            "addEligible": "Y",
                            "grWriting": "N",
                            "dropaddDeadline": "01/11/2019",
                            "pastDeadline": false,
                            "finalExam": ""
                        }
                    ]
                }
            ],
            "LASTCONTROLNUMBER": 2968,
            "RETRIEVEDROWS": 39,
            "TOTALROWS": 39
        }
]

function eceDB(){
	CourseList.count(function(err, count){
		if(count == 0){

		data.forEach(function(seed){
			CourseList.create(seed, function(err, courselist){
				if(err){
					console.log(err);
				}else{
					console.log("Added course");
				}
			});
		});
		}
	});
}

module.exports = eceDB;
