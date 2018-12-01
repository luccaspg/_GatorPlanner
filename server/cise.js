var mongoose = require("mongoose");
var CourseList = require("./models/course.server.model.js");
/*

*/
var data = [
    {
        "COURSES": [
            {
                "code": "CAP3020",
                "courseId": "024645",
                "name": "Theory and Practice of Multimedia Production",
                "termInd": " ",
                "description": "Combines the traditional media production pipeline and software engineering processes to synthesize an approach geared for the production of works incorporating both artistic and computational elements.",
                "prerequisites": "Prereq: CAP 3027.",
                "sections": [
                    {
                        "number": "12AA",
                        "classNumber": 11833,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Thry/Prct Multi Prod",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Joshua Fox"
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
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E220"
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
                "code": "CAP3032",
                "courseId": "024648",
                "name": "Interactive Modeling and Animation 1",
                "termInd": " ",
                "description": "Introduces programming and data structures for interactive two-dimensional multimedia applications. Representing form and transforms in two dimensions, capturing user actions and driving application behavior interactively. Graphical interfaces, image processing, automata and basic artificial intelligence.",
                "prerequisites": "Prereq: MAC 1147 or equivalent.",
                "sections": [
                    {
                        "number": 2606,
                        "classNumber": 11834,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Interact Mod/Animat 1",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Rong Zhang"
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
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E231"
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
                "code": "CAP3034",
                "courseId": "024650",
                "name": "Introduction to Computer-Aided Animation",
                "termInd": " ",
                "description": "Introduces topics related to computer-aided animation. Rigging for forward and inverse kinematics. Skin weighting. Morph targets. Expression-driven animation, rigid-body and particle simulation.",
                "prerequisites": "Prereq: MAC 1147 or equivalent.",
                "sections": [
                    {
                        "number": 8644,
                        "classNumber": 11861,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Intr Comp-Aid Animati",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Rong Zhang"
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
                                "meetBuilding": "ARCH",
                                "meetBldgCode": "0268",
                                "meetRoom": "0116"
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
                "code": "CAP4053",
                "courseId": "025647",
                "name": "Artificial Intelligence for Computer Games",
                "termInd": " ",
                "description": "Examines the use of A.I. in computer games. Topics include general A.I. knowledge, path finding, movement, tactics and planning, strategy, state machines, learning, dialogue, and emotions.",
                "prerequisites": "Prereq: COP 3530.",
                "sections": [
                    {
                        "number": 5819,
                        "classNumber": 11864,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Ai for Computer Games",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Jeremiah Blanchard"
                            },
                            {
                                "name": "Jeremiah Blanchard"
                            }
                        ],
                        "meetTimes": [
                            {
                                "meetNo": 1,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "11:45 AM",
                                "meetTimeEnd": "1:40 PM",
                                "meetPeriodBegin": "5",
                                "meetPeriodEnd": "6",
                                "meetBuilding": "NRG",
                                "meetBldgCode": "0102",
                                "meetRoom": "0205"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "12:50 PM",
                                "meetTimeEnd": "1:40 PM",
                                "meetPeriodBegin": "6",
                                "meetPeriodEnd": "6",
                                "meetBuilding": "NRG",
                                "meetBldgCode": "0102",
                                "meetRoom": "0205"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 5:30 PM - 7:30 PM"
                    }
                ]
            },
            {
                "code": "CAP4730",
                "courseId": "020652",
                "name": "Computational Structures in Computer Graphics",
                "termInd": " ",
                "description": "Studies the major topics in computer graphics: display and output technology, two and three dimensional manipulations; space curves and surfaces, hidden surface removal and shading models.",
                "prerequisites": "Prereq: COP 3530.",
                "sections": [
                    {
                        "number": 7118,
                        "classNumber": 11865,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Compu Stru Graphics",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Corey Toler-Franklin"
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
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E220"
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
                "code": "CAP4773",
                "courseId": "027041",
                "name": "Projects Data Science",
                "termInd": " ",
                "description": "",
                "prerequisites": "",
                "sections": [
                    {
                        "number": "2G88",
                        "classNumber": 11866,
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
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "N",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Zhe Wang"
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
                                "meetBuilding": "MCCA",
                                "meetBldgCode": "0495",
                                "meetRoom": 1142
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
                "code": "CDA3101",
                "courseId": "010726",
                "name": "Introduction to Computer Organization",
                "termInd": " ",
                "description": "Organization of computing systems. Logical basis of computer structure. Machine representation of instructions and data, flow of control, and basic machine instructions. Assembly language programming. (M)",
                "prerequisites": "Credits: 3; Prereq: COP 3504 or COP 3503; and MAC 2233, MAC 2311 or MAC 3472.",
                "sections": [
                    {
                        "number": 1048,
                        "classNumber": 12084,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Intro to Compu Orgnzn",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 96.54,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "11:45 AM",
                                "meetTimeEnd": "12:35 PM",
                                "meetPeriodBegin": "5",
                                "meetPeriodEnd": "5",
                                "meetBuilding": "FLG",
                                "meetBldgCode": "0021",
                                "meetRoom": "0210"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": "11DG",
                        "classNumber": 12085,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Intro to Compu Orgnzn",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 96.54,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "12:50 PM",
                                "meetTimeEnd": "1:40 PM",
                                "meetPeriodBegin": "6",
                                "meetPeriodEnd": "6",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E220"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": 1705,
                        "classNumber": 12113,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Intro to Compu Orgnzn",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 96.54,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "1:55 PM",
                                "meetTimeEnd": "2:45 PM",
                                "meetPeriodBegin": "7",
                                "meetPeriodEnd": "7",
                                "meetBuilding": "RNK",
                                "meetBldgCode": "0272",
                                "meetRoom": "0110"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": 1709,
                        "classNumber": 12114,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Intro to Compu Orgnzn",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 96.54,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "1:55 PM",
                                "meetTimeEnd": "2:45 PM",
                                "meetPeriodBegin": "7",
                                "meetPeriodEnd": "7",
                                "meetBuilding": "FLG",
                                "meetBldgCode": "0021",
                                "meetRoom": "0265"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": 1711,
                        "classNumber": 12115,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Intro to Compu Orgnzn",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 96.54,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "5:10 PM",
                                "meetTimeEnd": "6:00 PM",
                                "meetPeriodBegin": "10",
                                "meetPeriodEnd": "10",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E222"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": "17H1",
                        "classNumber": 12116,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Intro to Compu Orgnzn",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 96.54,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "10:40 AM",
                                "meetTimeEnd": "11:30 AM",
                                "meetPeriodBegin": "4",
                                "meetPeriodEnd": "4",
                                "meetBuilding": "WEIM",
                                "meetBldgCode": "0030",
                                "meetRoom": 1084
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": "17HF",
                        "classNumber": 12117,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Intro to Compu Orgnzn",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 96.54,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "9:35 AM",
                                "meetTimeEnd": "10:25 AM",
                                "meetPeriodBegin": "3",
                                "meetPeriodEnd": "3",
                                "meetBuilding": "FLG",
                                "meetBldgCode": "0021",
                                "meetRoom": "0260"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": 5408,
                        "classNumber": 12119,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Intro to Compu Orgnzn",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 96.54,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "W"
                                ],
                                "meetTimeBegin": "4:05 PM",
                                "meetTimeEnd": "4:55 PM",
                                "meetPeriodBegin": "9",
                                "meetPeriodEnd": "9",
                                "meetBuilding": "LEI",
                                "meetBldgCode": "0009",
                                "meetRoom": "0207"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": 8767,
                        "classNumber": 12120,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Intro to Compu Orgnzn",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 96.54,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "W"
                                ],
                                "meetTimeBegin": "10:40 AM",
                                "meetTimeEnd": "11:30 AM",
                                "meetPeriodBegin": "4",
                                "meetPeriodEnd": "4",
                                "meetBuilding": "FAC",
                                "meetBldgCode": "0599",
                                "meetRoom": "0127"
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
                "code": "CDA4630",
                "courseId": "027045",
                "name": "Embedded Systems",
                "termInd": " ",
                "description": "",
                "prerequisites": "",
                "sections": [
                    {
                        "number": "01BA",
                        "classNumber": 11586,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Embedded Systems",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PD",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Prabhat Mishra"
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
                                "meetBuilding": "NEB",
                                "meetBldgCode": "0033",
                                "meetRoom": "0201"
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
                "code": "CEN3031",
                "courseId": "016306",
                "name": "Introduction to Software Engineering",
                "termInd": " ",
                "description": "Topics include software planning, specifications, coding, testing and maintenance. Gain experience in the team approach to large system development. (M)",
                "prerequisites": "Prereq: COP 3530.",
                "sections": [
                    {
                        "number": "13CA",
                        "classNumber": 11658,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Intro Software Engr",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Philippa Brown"
                            },
                            {
                                "name": "Philippa Brown"
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
                                "meetBuilding": "MCCC",
                                "meetBldgCode": "0497",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "4:05 PM",
                                "meetTimeEnd": "4:55 PM",
                                "meetPeriodBegin": "9",
                                "meetPeriodEnd": "9",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E312"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                    },
                    {
                        "number": "13CB",
                        "classNumber": 11659,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Intro Software Engr",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Philippa Brown"
                            },
                            {
                                "name": "Philippa Brown"
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
                                "meetBuilding": "MCCC",
                                "meetBldgCode": "0497",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "5:10 PM",
                                "meetTimeEnd": "6:00 PM",
                                "meetPeriodBegin": "10",
                                "meetPeriodEnd": "10",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E312"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                    },
                    {
                        "number": 2551,
                        "classNumber": 11662,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Intro Software Engr",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Philippa Brown"
                            },
                            {
                                "name": "Philippa Brown"
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
                                "meetBuilding": "MCCC",
                                "meetBldgCode": "0497",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "6:15 PM",
                                "meetTimeEnd": "7:05 PM",
                                "meetPeriodBegin": "11",
                                "meetPeriodEnd": "11",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E312"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                    },
                    {
                        "number": "32H1",
                        "classNumber": 11663,
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
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Philippa Brown"
                            },
                            {
                                "name": "Philippa Brown"
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
                                "meetBuilding": "MCCC",
                                "meetBldgCode": "0497",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "7:20 PM",
                                "meetTimeEnd": "8:10 PM",
                                "meetPeriodBegin": "E1",
                                "meetPeriodEnd": "E1",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E312"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                    },
                    {
                        "number": 5842,
                        "classNumber": 11664,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Intro Software Engr",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Philippa Brown"
                            },
                            {
                                "name": "Philippa Brown"
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
                                "meetBuilding": "MCCC",
                                "meetBldgCode": "0497",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "8:20 PM",
                                "meetTimeEnd": "9:10 PM",
                                "meetPeriodBegin": "E2",
                                "meetPeriodEnd": "E2",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E312"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                    },
                    {
                        "number": "041A",
                        "classNumber": 11767,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Intro Software Engr",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Philippa Brown"
                            },
                            {
                                "name": "Philippa Brown"
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
                                "meetBuilding": "MCCC",
                                "meetBldgCode": "0497",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "10:40 AM",
                                "meetTimeEnd": "11:30 AM",
                                "meetPeriodBegin": "4",
                                "meetPeriodEnd": "4",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E312"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                    },
                    {
                        "number": "04H3",
                        "classNumber": 11768,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Intro Software Engr",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Philippa Brown"
                            },
                            {
                                "name": "Philippa Brown"
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
                                "meetBuilding": "MCCC",
                                "meetBldgCode": "0497",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "8:30 AM",
                                "meetTimeEnd": "9:20 AM",
                                "meetPeriodBegin": "2",
                                "meetPeriodEnd": "2",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E312"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                    },
                    {
                        "number": "04H6",
                        "classNumber": 11769,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Intro Software Engr",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Philippa Brown"
                            },
                            {
                                "name": "Philippa Brown"
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
                                "meetBuilding": "MCCC",
                                "meetBldgCode": "0497",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "9:35 AM",
                                "meetTimeEnd": "10:25 AM",
                                "meetPeriodBegin": "3",
                                "meetPeriodEnd": "3",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E312"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                    },
                    {
                        "number": "06A6",
                        "classNumber": 11770,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Intro Software Engr",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Philippa Brown"
                            },
                            {
                                "name": "Philippa Brown"
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
                                "meetBuilding": "MCCC",
                                "meetBldgCode": "0497",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "11:45 AM",
                                "meetTimeEnd": "12:35 PM",
                                "meetPeriodBegin": "5",
                                "meetPeriodEnd": "5",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E312"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                    },
                    {
                        "number": "06B2",
                        "classNumber": 11771,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Intro Software Engr",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Philippa Brown"
                            },
                            {
                                "name": "Philippa Brown"
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
                                "meetBuilding": "MCCC",
                                "meetBldgCode": "0497",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "12:50 PM",
                                "meetTimeEnd": "1:40 PM",
                                "meetPeriodBegin": "6",
                                "meetPeriodEnd": "6",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E312"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                    },
                    {
                        "number": "12C5",
                        "classNumber": 11772,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Intro Software Engr",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Philippa Brown"
                            },
                            {
                                "name": "Philippa Brown"
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
                                "meetBuilding": "MCCC",
                                "meetBldgCode": "0497",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "1:55 PM",
                                "meetTimeEnd": "2:45 PM",
                                "meetPeriodBegin": "7",
                                "meetPeriodEnd": "7",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E312"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 12:30 PM - 2:30 PM"
                    },
                    {
                        "number": "12C6",
                        "classNumber": 11773,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Intro Software Engr",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Philippa Brown"
                            },
                            {
                                "name": "Philippa Brown"
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
                                "meetBuilding": "MCCC",
                                "meetBldgCode": "0497",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "3:00 PM",
                                "meetTimeEnd": "3:50 PM",
                                "meetPeriodBegin": "8",
                                "meetPeriodEnd": "8",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E312"
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
                "code": "CEN3913",
                "courseId": "026731",
                "name": "Computer and Information Science and Engineering Design 1",
                "termInd": " ",
                "description": "Preparatory skills are developed for CISE Design 2 for Computer Engineering students. Teams design, produce and report on a software prototype, meeting defined specifications and using a structured design methodology and project management.",
                "prerequisites": "Prereq: CEN 3031.",
                "sections": [
                    {
                        "number": "1H82",
                        "classNumber": 11665,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Cise Design 1",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Mark Schmalz"
                            },
                            {
                                "name": "Mark Schmalz"
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
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E220"
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
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E220"
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
                "code": "CEN4072",
                "courseId": "024719",
                "name": "Software Testing and Verification",
                "termInd": " ",
                "description": "Concepts, principles and techniques of software testing and verification. Strengths and limitations of black-box and white-box testing methods; techniques for proving the correctness of programs.",
                "prerequisites": "Prereq: CEN 3031.",
                "sections": [
                    {
                        "number": "4C78",
                        "classNumber": 22288,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Softwre Tsting Verifi",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Stephen Thebaut"
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
                                "meetRoom": 2333
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
                "code": "CEN4721",
                "courseId": "026617",
                "name": "Human-Computer Interaction",
                "termInd": " ",
                "description": "Studies the major topics in the study, planning and design of the interaction between people and computers. Topics include interface design (principles, theories and guidelines), virtual environments, interactive devices and collaboration.",
                "prerequisites": "Prereq: COP 3530.",
                "sections": [
                    {
                        "number": "1H09",
                        "classNumber": 11696,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Human-Comp Interact",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Jaime Ruiz"
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
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E221"
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
                "code": "CEN4722",
                "courseId": "027401",
                "name": "User Experience Design",
                "termInd": " ",
                "description": "Introduces methods and tools used in User Experience Design (UXD): the early stages of software design focused on meeting user needs. Key concepts include user research, contextual design, design thinking, ideation, iterative design, prototyping, and design documentation. Projects utilize software tools used in the industry.",
                "prerequisites": "Prereq: COP 3530.",
                "sections": [
                    {
                        "number": "324D",
                        "classNumber": 11697,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Ux Design",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Sharon Chuyew Yee"
                            },
                            {
                                "name": "Sharon Chuyew Yee"
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
                                "meetBuilding": "MCCA",
                                "meetBldgCode": "0495",
                                "meetRoom": 1142
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
                                "meetBuilding": "MCCA",
                                "meetBldgCode": "0495",
                                "meetRoom": 1142
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
                "code": "CEN4914",
                "courseId": "025015",
                "name": "Computer and Information Science and Engineering Design 2",
                "termInd": " ",
                "description": "Involves completing a significant CEN-related project. Coordinate with the instructor and a project advisor, prepare a detailed technical report and deliver an oral presentation.",
                "prerequisites": "Prereq: CEN 3913.",
                "sections": [
                    {
                        "number": 6750,
                        "classNumber": 11698,
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
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Mark Schmalz"
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
                "code": "CGS3065",
                "courseId": "021330",
                "name": "Legal and Social Issues in Computing",
                "termInd": " ",
                "description": "Explores the history, the myth, the ethics, the law and the risks of computer-based technology in modern society. Emphasizes critical analysis of hypotheticals and case studies. Published material is supplemented with online references.",
                "prerequisites": "Prereq: previous experience in Unix environment.",
                "sections": [
                    {
                        "number": "2E37",
                        "classNumber": 11502,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Legal and Social Issues",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "AD",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Jasmine Mcnealy"
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
                "code": "CIS4301",
                "courseId": "010869",
                "name": "Information and Database Systems 1",
                "termInd": " ",
                "description": "First part of a two-course sequence that studies the essential concepts, principles and techniques of modern database systems. Topics include modeling and querying of data using conceptual data models as well as the development of a database application. (M)",
                "prerequisites": "Credits: 3; Prereq: COP 3504, or COP 3503 and COT 3100.",
                "sections": [
                    {
                        "number": "0804",
                        "classNumber": 11313,
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
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 22.26,
                        "lateFlag": "N",
                        "EEP": "N",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Peter Dobbins"
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
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "A101"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 3:00 PM - 5:00 PM"
                    },
                    {
                        "number": 7776,
                        "classNumber": 11315,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Info and Database Sys 1",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 22.26,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Peter Dobbins"
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
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "A101"
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
                "code": "CIS4905",
                "courseId": "021334",
                "name": "Individual Study in CISE",
                "termInd": " ",
                "description": "Problems in different areas of computer science.",
                "prerequisites": "",
                "sections": [
                    {
                        "number": "4C23",
                        "classNumber": 22233,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Departmentally Controlled",
                        "credits": "VAR",
                        "credits_min": 1,
                        "credits_max": 4,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "SPEC PROB IN CIS",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "N",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Richard Newman"
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
                "code": "CIS4913C",
                "courseId": "022623",
                "name": "Integrated Product and Process Design 2",
                "termInd": " ",
                "description": "Second part of a sequence where teams of engineering and business students partner with industry sponsors to design and build authentic products and processes.",
                "prerequisites": "Prereq: CIS 4912C.",
                "sections": [
                    {
                        "number": 5026,
                        "classNumber": 11343,
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
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
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
                "code": "CIS4914",
                "courseId": "010871",
                "name": "Senior Project",
                "termInd": " ",
                "description": "Involves completing a significant CISE-related project. Coordinate with the instructor and a project advisor, prepare a detailed technical report and deliver an oral presentation. (M)",
                "prerequisites": "Prereq: senior CISE standing and approved project proposal.",
                "sections": [
                    {
                        "number": 2596,
                        "classNumber": 11345,
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
                        "rotateTitle": "SENIOR PROJECT",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Mark Schmalz"
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
                "code": "CIS4930",
                "courseId": "016253",
                "name": "Special Topics in CISE",
                "termInd": " ",
                "description": "Variable content provides an opportunity for in-depth study of topics not offered elsewhere and of topics of current significance.",
                "prerequisites": "Prereq: departmental approval.",
                "sections": [
                    {
                        "number": "03A9",
                        "classNumber": 11346,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Special Topics",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "MALWARE REV ENGR",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 47.13,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Joseph Wilson"
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
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E309"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "4/29/2019 @ 10:00 AM - 12:00 PM"
                    },
                    {
                        "number": "05AG",
                        "classNumber": 11347,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Special Topics",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "HUM-CTRD INPUT ALG",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 47.13,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Lisa Anthony"
                            }
                        ],
                        "meetTimes": [
                            {
                                "meetNo": 1,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "5:10 PM",
                                "meetTimeEnd": "8:10 PM",
                                "meetPeriodBegin": "10",
                                "meetPeriodEnd": "E1",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E220"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/3/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": "07EF",
                        "classNumber": 11348,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Special Topics",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "VR FOR SOCIAL GOOD",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 47.13,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Benjamin Lok"
                            }
                        ],
                        "meetTimes": [
                            {
                                "meetNo": 1,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "1:55 PM",
                                "meetTimeEnd": "4:55 PM",
                                "meetPeriodBegin": "7",
                                "meetPeriodEnd": "9",
                                "meetBuilding": "NPB",
                                "meetBldgCode": "0092",
                                "meetRoom": 1001
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 10:00 AM - 12:00 PM"
                    },
                    {
                        "number": "343D",
                        "classNumber": 11350,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Special Topics",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "SOFTWARE SECURITY",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 47.13,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Byron Williams"
                            },
                            {
                                "name": "Byron Williams"
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
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E119"
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
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E119"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 10:00 AM - 12:00 PM"
                    },
                    {
                        "number": "349C",
                        "classNumber": 11376,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Special Topics",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "3D AUDIO",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 47.13,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Kyla Mcmullen"
                            },
                            {
                                "name": "Kyla Mcmullen"
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
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E221"
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
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E221"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": "3C90",
                        "classNumber": 11378,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Special Topics",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "COMPUTER VISION",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 47.13,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Baba Vemuri"
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
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E222"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "4/30/2019 @ 10:00 AM - 12:00 PM"
                    },
                    {
                        "number": "39GE",
                        "classNumber": 21720,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Special Topics",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "MOBILE NETWORKING",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 47.13,
                        "lateFlag": "N",
                        "EEP": "N",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Ahmed Helmy"
                            },
                            {
                                "name": "Ahmed Helmy"
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
                                "meetBuilding": "TUR",
                                "meetBldgCode": "0267",
                                "meetRoom": "L005"
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
                                "meetBuilding": "TUR",
                                "meetBldgCode": "0267",
                                "meetRoom": "L005"
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
                "code": "CIS4940",
                "courseId": "017073",
                "name": "Practical Work",
                "termInd": " ",
                "description": "One term practical software engineering work under industrial supervision as set forth in the Herbert Wertheim College of Engineering regulations. (S-U)",
                "prerequisites": "",
                "sections": [
                    {
                        "number": "05EA",
                        "classNumber": 11382,
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
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "N",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Richard Newman"
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
                "code": "CIS4949",
                "courseId": "010873",
                "name": "Co-Op Work in CISE",
                "termInd": " ",
                "description": "Practical engineering work under industrial supervision, as set forth in the Herbert Wertheim College of Engineering regulations. (S-U)",
                "prerequisites": "",
                "sections": [
                    {
                        "number": 2513,
                        "classNumber": 11383,
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
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "N",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Richard Newman"
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
                "code": "CNT4007C",
                "courseId": "020427",
                "name": "Computer Network Fundamentals",
                "termInd": " ",
                "description": "Fundamental concepts, principles and standards of computer networks. Topics are introduced in bottom-up approach, starting from physical layer in OSI system architecture with a stronger focus on data link, mac, network and transport layers. (M)",
                "prerequisites": "Prereq: COP 4600.",
                "sections": [
                    {
                        "number": 1053,
                        "classNumber": 11387,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Compu Netwrk Fundamen",
                        "credits": 4,
                        "credits_min": 4,
                        "credits_max": 4,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Richard Newman"
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
                                "meetRoom": "L005"
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
                "code": "COP2800",
                "courseId": "022621",
                "name": "Computer Programming Using JAVA",
                "termInd": " ",
                "description": "In-depth treatment of computer programming using JAVA. Problems related to a variety of disciplines are solved. Introduces the basic concepts of software and hardware; develop a variety of stand-alone applications and applets. For non-CISE majors only.",
                "prerequisites": "Prereq: MAC 1147 or the equivalent.",
                "sections": [
                    {
                        "number": "0372",
                        "classNumber": 11530,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Compu Prog Using Java",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Yunhao Wan"
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
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E220"
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
                "code": "COP3275",
                "courseId": "010934",
                "name": "Computer Programming Using C",
                "termInd": " ",
                "description": "Solve problems related to a variety of disciplines; introduces the basic concepts of software and hardware. (M)",
                "prerequisites": "Prereq: MAC 1147 or higher.",
                "sections": [
                    {
                        "number": "072E",
                        "classNumber": 11531,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Programming Using C",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Roozbeh Ketabi"
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
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E119"
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
                "code": "COP3502",
                "courseId": "024105",
                "name": "Programming Fundamentals 1",
                "termInd": " ",
                "description": "First course of a two-semester introductory sequence for those planning further study in computer science, digital arts and sciences or computer engineering. Concepts of computer science and the process of computer programming, including object-oriented programming, procedural and data abstraction and program modularity.",
                "prerequisites": "Coreq: MAC 2311.",
                "sections": [
                    {
                        "number": "25DE",
                        "classNumber": 11050,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 1",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "12:50 PM",
                                "meetTimeEnd": "2:45 PM",
                                "meetPeriodBegin": "6",
                                "meetPeriodEnd": "7",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E115"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": "25E2",
                        "classNumber": 11051,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 1",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "3:00 PM",
                                "meetTimeEnd": "4:55 PM",
                                "meetPeriodBegin": "8",
                                "meetPeriodEnd": "9",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E115"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": 4185,
                        "classNumber": 11054,
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
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "5:10 PM",
                                "meetTimeEnd": "7:05 PM",
                                "meetPeriodBegin": "10",
                                "meetPeriodEnd": "11",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E115"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": 5313,
                        "classNumber": 11055,
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
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E113"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": 6736,
                        "classNumber": 11056,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 1",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "W"
                                ],
                                "meetTimeBegin": "10:40 AM",
                                "meetTimeEnd": "12:35 PM",
                                "meetPeriodBegin": "4",
                                "meetPeriodEnd": "5",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E113"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": 6753,
                        "classNumber": 11084,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 1",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "W"
                                ],
                                "meetTimeBegin": "12:50 PM",
                                "meetTimeEnd": "2:45 PM",
                                "meetPeriodBegin": "6",
                                "meetPeriodEnd": "7",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E113"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": 6761,
                        "classNumber": 11085,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 1",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "W"
                                ],
                                "meetTimeBegin": "3:00 PM",
                                "meetTimeEnd": "4:55 PM",
                                "meetPeriodBegin": "8",
                                "meetPeriodEnd": "9",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E113"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": 6764,
                        "classNumber": 11086,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 1",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "W"
                                ],
                                "meetTimeBegin": "5:10 PM",
                                "meetTimeEnd": "7:05 PM",
                                "meetPeriodBegin": "10",
                                "meetPeriodEnd": "11",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E113"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": 6766,
                        "classNumber": 11087,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 1",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E115"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": 7091,
                        "classNumber": 11088,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 1",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "W"
                                ],
                                "meetTimeBegin": "10:40 AM",
                                "meetTimeEnd": "12:35 PM",
                                "meetPeriodBegin": "4",
                                "meetPeriodEnd": "5",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E115"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": 9285,
                        "classNumber": 11089,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 1",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "W"
                                ],
                                "meetTimeBegin": "12:50 PM",
                                "meetTimeEnd": "2:45 PM",
                                "meetPeriodBegin": "6",
                                "meetPeriodEnd": "7",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E115"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": "128G",
                        "classNumber": 11532,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 1",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "12:50 PM",
                                "meetTimeEnd": "2:45 PM",
                                "meetPeriodBegin": "6",
                                "meetPeriodEnd": "7",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E116"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": "128H",
                        "classNumber": 11560,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 1",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "3:00 PM",
                                "meetTimeEnd": "4:55 PM",
                                "meetPeriodBegin": "8",
                                "meetPeriodEnd": "9",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E116"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": "149A",
                        "classNumber": 11561,
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
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "5:10 PM",
                                "meetTimeEnd": "7:05 PM",
                                "meetPeriodBegin": "10",
                                "meetPeriodEnd": "11",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E116"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": "149B",
                        "classNumber": 11562,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 1",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "10:40 AM",
                                "meetTimeEnd": "12:35 PM",
                                "meetPeriodBegin": "4",
                                "meetPeriodEnd": "5",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E115"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": "1A30",
                        "classNumber": 11563,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 1",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "10:40 AM",
                                "meetTimeEnd": "12:35 PM",
                                "meetPeriodBegin": "4",
                                "meetPeriodEnd": "5",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E113"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": "1A64",
                        "classNumber": 11564,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 1",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "12:50 PM",
                                "meetTimeEnd": "2:45 PM",
                                "meetPeriodBegin": "6",
                                "meetPeriodEnd": "7",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E113"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": "1A87",
                        "classNumber": 11565,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 1",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "3:00 PM",
                                "meetTimeEnd": "4:55 PM",
                                "meetPeriodBegin": "8",
                                "meetPeriodEnd": "9",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E113"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": "1F70",
                        "classNumber": 11566,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 1",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "5:10 PM",
                                "meetTimeEnd": "7:05 PM",
                                "meetPeriodBegin": "10",
                                "meetPeriodEnd": "11",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E113"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 7:30 AM - 9:30 AM"
                    },
                    {
                        "number": "1H38",
                        "classNumber": 11567,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 1",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
                            },
                            {
                                "name": "Peter Dobbins"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "10:40 AM",
                                "meetTimeEnd": "12:35 PM",
                                "meetPeriodBegin": "4",
                                "meetPeriodEnd": "5",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E116"
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
                "code": "COP3503",
                "courseId": "024106",
                "name": "Programming Fundamentals 2",
                "termInd": " ",
                "description": "Second course of a two-semester introductory sequence for those planning further study in computer science, digital arts and sciences or computer engineering. Concepts of computer science and the process of computer programming, including object-oriented programming, procedural and data abstraction and program modularity.",
                "prerequisites": "Prereq: COP 3502 with a minimum grade of C or an AP exam in computer science with a minimum grade of 4; and MAC 2311 with a minimum grade of C.",
                "sections": [
                    {
                        "number": "06C8",
                        "classNumber": 11090,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 2",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Joshua Fox"
                            },
                            {
                                "name": "Joshua Fox"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "M"
                                ],
                                "meetTimeBegin": "8:30 AM",
                                "meetTimeEnd": "10:25 AM",
                                "meetPeriodBegin": "2",
                                "meetPeriodEnd": "3",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E113"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": "06D0",
                        "classNumber": 11091,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 2",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Joshua Fox"
                            },
                            {
                                "name": "Joshua Fox"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "M"
                                ],
                                "meetTimeBegin": "10:40 AM",
                                "meetTimeEnd": "12:35 PM",
                                "meetPeriodBegin": "4",
                                "meetPeriodEnd": "5",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E113"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": 1133,
                        "classNumber": 11119,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 2",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Joshua Fox"
                            },
                            {
                                "name": "Joshua Fox"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "M"
                                ],
                                "meetTimeBegin": "8:30 AM",
                                "meetTimeEnd": "10:25 AM",
                                "meetPeriodBegin": "2",
                                "meetPeriodEnd": "3",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E116"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": 1136,
                        "classNumber": 11120,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 2",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Joshua Fox"
                            },
                            {
                                "name": "Joshua Fox"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "M"
                                ],
                                "meetTimeBegin": "10:40 AM",
                                "meetTimeEnd": "12:35 PM",
                                "meetPeriodBegin": "4",
                                "meetPeriodEnd": "5",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E116"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": "15A3",
                        "classNumber": 11121,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 2",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Joshua Fox"
                            },
                            {
                                "name": "Joshua Fox"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "12:50 PM",
                                "meetTimeEnd": "2:45 PM",
                                "meetPeriodBegin": "6",
                                "meetPeriodEnd": "7",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E116"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": "17H4",
                        "classNumber": 11122,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 2",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Joshua Fox"
                            },
                            {
                                "name": "Joshua Fox"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "3:00 PM",
                                "meetTimeEnd": "4:55 PM",
                                "meetPeriodBegin": "8",
                                "meetPeriodEnd": "9",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E116"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": "19F2",
                        "classNumber": 11123,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 2",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Joshua Fox"
                            },
                            {
                                "name": "Joshua Fox"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E116"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": "1B02",
                        "classNumber": 11124,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 2",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Joshua Fox"
                            },
                            {
                                "name": "Joshua Fox"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "12:50 PM",
                                "meetTimeEnd": "2:45 PM",
                                "meetPeriodBegin": "6",
                                "meetPeriodEnd": "7",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E113"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": "1B09",
                        "classNumber": 11125,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 2",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Joshua Fox"
                            },
                            {
                                "name": "Joshua Fox"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "3:00 PM",
                                "meetTimeEnd": "4:55 PM",
                                "meetPeriodBegin": "8",
                                "meetPeriodEnd": "9",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E113"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": "1C75",
                        "classNumber": 11186,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 2",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Joshua Fox"
                            },
                            {
                                "name": "Joshua Fox"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
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
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E113"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": "25G7",
                        "classNumber": 11188,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 2",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Joshua Fox"
                            },
                            {
                                "name": "Joshua Fox"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "M"
                                ],
                                "meetTimeBegin": "8:30 AM",
                                "meetTimeEnd": "10:25 AM",
                                "meetPeriodBegin": "2",
                                "meetPeriodEnd": "3",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E115"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": 2672,
                        "classNumber": 11189,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 2",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Joshua Fox"
                            },
                            {
                                "name": "Joshua Fox"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "M"
                                ],
                                "meetTimeBegin": "10:40 AM",
                                "meetTimeEnd": "12:35 PM",
                                "meetPeriodBegin": "4",
                                "meetPeriodEnd": "5",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E115"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": 2673,
                        "classNumber": 11190,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 2",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Joshua Fox"
                            },
                            {
                                "name": "Joshua Fox"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "F"
                                ],
                                "meetTimeBegin": "12:50 PM",
                                "meetTimeEnd": "2:45 PM",
                                "meetPeriodBegin": "6",
                                "meetPeriodEnd": "7",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E116"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": 3513,
                        "classNumber": 11192,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 2",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Joshua Fox"
                            },
                            {
                                "name": "Joshua Fox"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "F"
                                ],
                                "meetTimeBegin": "10:40 AM",
                                "meetTimeEnd": "12:35 PM",
                                "meetPeriodBegin": "4",
                                "meetPeriodEnd": "5",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E113"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": 6773,
                        "classNumber": 11193,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 2",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Joshua Fox"
                            },
                            {
                                "name": "Joshua Fox"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "F"
                                ],
                                "meetTimeBegin": "12:50 PM",
                                "meetTimeEnd": "2:45 PM",
                                "meetPeriodBegin": "6",
                                "meetPeriodEnd": "7",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E113"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": 6776,
                        "classNumber": 11291,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 2",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Joshua Fox"
                            },
                            {
                                "name": "Joshua Fox"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "F"
                                ],
                                "meetTimeBegin": "3:00 PM",
                                "meetTimeEnd": "4:55 PM",
                                "meetPeriodBegin": "8",
                                "meetPeriodEnd": "9",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E113"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": 6777,
                        "classNumber": 11292,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 2",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Joshua Fox"
                            },
                            {
                                "name": "Joshua Fox"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "F"
                                ],
                                "meetTimeBegin": "10:40 AM",
                                "meetTimeEnd": "12:35 PM",
                                "meetPeriodBegin": "4",
                                "meetPeriodEnd": "5",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E116"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": 6780,
                        "classNumber": 11293,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Prog Fundamentals 2",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 18.66,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Joshua Fox"
                            },
                            {
                                "name": "Joshua Fox"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "F"
                                ],
                                "meetTimeBegin": "3:00 PM",
                                "meetTimeEnd": "4:55 PM",
                                "meetPeriodBegin": "8",
                                "meetPeriodEnd": "9",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E116"
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
                "code": "COP3530",
                "courseId": "010942",
                "name": "Data Structures and Algorithm",
                "termInd": " ",
                "description": "Algorithm development using pseudo languages, basic program structures, program design techniques, storage and manipulation of basic data structures like arrays, stacks, queues, sorting and searching and string processing. Linked linear lists. Trees and multilinked structures. (M)",
                "prerequisites": "Credits: 4; Prereq: COP 3504 or COP 3503 with minimum grade of C, COT 3100, and MAC 2234, MAC 2312, MAC 3473 or MAC 3512.",
                "sections": [
                    {
                        "number": "19HD",
                        "classNumber": 11221,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Data Struc/Algorithms",
                        "credits": 4,
                        "credits_min": 4,
                        "credits_max": 4,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "5:10 PM",
                                "meetTimeEnd": "6:00 PM",
                                "meetPeriodBegin": "10",
                                "meetPeriodEnd": "10",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E222"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 5:30 PM - 7:30 PM"
                    },
                    {
                        "number": 6723,
                        "classNumber": 11223,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Data Struc/Algorithms",
                        "credits": 4,
                        "credits_min": 4,
                        "credits_max": 4,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "6:15 PM",
                                "meetTimeEnd": "7:05 PM",
                                "meetPeriodBegin": "11",
                                "meetPeriodEnd": "11",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E222"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 5:30 PM - 7:30 PM"
                    },
                    {
                        "number": 1079,
                        "classNumber": 11295,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Data Struc/Algorithms",
                        "credits": 4,
                        "credits_min": 4,
                        "credits_max": 4,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "12:50 PM",
                                "meetTimeEnd": "1:40 PM",
                                "meetPeriodBegin": "6",
                                "meetPeriodEnd": "6",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E222"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 5:30 PM - 7:30 PM"
                    },
                    {
                        "number": "15A6",
                        "classNumber": 11296,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Data Struc/Algorithms",
                        "credits": 4,
                        "credits_min": 4,
                        "credits_max": 4,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "1:55 PM",
                                "meetTimeEnd": "2:45 PM",
                                "meetPeriodBegin": "7",
                                "meetPeriodEnd": "7",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E121"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 5:30 PM - 7:30 PM"
                    },
                    {
                        "number": "19G7",
                        "classNumber": 11297,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Data Struc/Algorithms",
                        "credits": 4,
                        "credits_min": 4,
                        "credits_max": 4,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "4:05 PM",
                                "meetTimeEnd": "4:55 PM",
                                "meetPeriodBegin": "9",
                                "meetPeriodEnd": "9",
                                "meetBuilding": "AND",
                                "meetBldgCode": "0007",
                                "meetRoom": "0134"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/2/2019 @ 5:30 PM - 7:30 PM"
                    },
                    {
                        "number": "19GG",
                        "classNumber": 11298,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Data Struc/Algorithms",
                        "credits": 4,
                        "credits_min": 4,
                        "credits_max": 4,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Cheryl Resch"
                            },
                            {
                                "name": "Cheryl Resch"
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
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "3:00 PM",
                                "meetTimeEnd": "3:50 PM",
                                "meetPeriodBegin": "8",
                                "meetPeriodEnd": "8",
                                "meetBuilding": "LIT",
                                "meetBldgCode": "0655",
                                "meetRoom": "0121"
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
                "code": "COP4020",
                "courseId": "020917",
                "name": "Programming Language Concepts",
                "termInd": " ",
                "description": "Introduces programming language principles, including language constructs, design goals, run-time structures, implementation techniques and exposure to a wide variety of programming paradigms.",
                "prerequisites": "Prereq: COP 3530.",
                "sections": [
                    {
                        "number": 6620,
                        "classNumber": 11227,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Program Lang Concepts",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Alin Dobra"
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
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E121"
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
                "code": "COP4331",
                "courseId": "021518",
                "name": "Object-oriented Programming",
                "termInd": " ",
                "description": "Fundamental conceptual models for programming languages illustrated with specific programming languages and application problems. Specific topics include class and object models, inheritance among classes, objects and static and dynamic systems and implementations.",
                "prerequisites": "Prereq: COP 3530.",
                "sections": [
                    {
                        "number": 7276,
                        "classNumber": 11228,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Object-Orient Program",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Philippa Brown"
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
                                "meetBuilding": "PUGH",
                                "meetBldgCode": "0072",
                                "meetRoom": 120
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
                "code": "COP4600",
                "courseId": "016428",
                "name": "Operating Systems",
                "termInd": " ",
                "description": "Design and implementation of various components of a modern operating system, including I/O programming, interrupt handling, process and resource management, computer networks and distributed systems. (M)",
                "prerequisites": "Prereq: CDA 3101 and COP 3530; knowledge of C or C++ recommended.",
                "sections": [
                    {
                        "number": "193A",
                        "classNumber": 11153,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Operating Systems",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Jeremiah Blanchard"
                            },
                            {
                                "name": "Jeremiah Blanchard"
                            },
                            {
                                "name": "Jeremiah Blanchard"
                            }
                        ],
                        "meetTimes": [
                            {
                                "meetNo": 1,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "6:15 PM",
                                "meetTimeEnd": "8:10 PM",
                                "meetPeriodBegin": "11",
                                "meetPeriodEnd": "E1",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "7:20 PM",
                                "meetTimeEnd": "8:10 PM",
                                "meetPeriodBegin": "E1",
                                "meetPeriodEnd": "E1",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "10:40 AM",
                                "meetTimeEnd": "11:30 AM",
                                "meetPeriodBegin": "4",
                                "meetPeriodEnd": "4",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E222"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "4/30/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": "193B",
                        "classNumber": 11154,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Operating Systems",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Jeremiah Blanchard"
                            },
                            {
                                "name": "Jeremiah Blanchard"
                            },
                            {
                                "name": "Jeremiah Blanchard"
                            }
                        ],
                        "meetTimes": [
                            {
                                "meetNo": 1,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "6:15 PM",
                                "meetTimeEnd": "8:10 PM",
                                "meetPeriodBegin": "11",
                                "meetPeriodEnd": "E1",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "7:20 PM",
                                "meetTimeEnd": "8:10 PM",
                                "meetPeriodBegin": "E1",
                                "meetPeriodEnd": "E1",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "11:45 AM",
                                "meetTimeEnd": "12:35 PM",
                                "meetPeriodBegin": "5",
                                "meetPeriodEnd": "5",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E222"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "4/30/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": "193F",
                        "classNumber": 11155,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Operating Systems",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Jeremiah Blanchard"
                            },
                            {
                                "name": "Jeremiah Blanchard"
                            },
                            {
                                "name": "Jeremiah Blanchard"
                            }
                        ],
                        "meetTimes": [
                            {
                                "meetNo": 1,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "6:15 PM",
                                "meetTimeEnd": "8:10 PM",
                                "meetPeriodBegin": "11",
                                "meetPeriodEnd": "E1",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "7:20 PM",
                                "meetTimeEnd": "8:10 PM",
                                "meetPeriodBegin": "E1",
                                "meetPeriodEnd": "E1",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "12:50 PM",
                                "meetTimeEnd": "1:40 PM",
                                "meetPeriodBegin": "6",
                                "meetPeriodEnd": "6",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E222"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "4/30/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": "193G",
                        "classNumber": 11156,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Operating Systems",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Jeremiah Blanchard"
                            },
                            {
                                "name": "Jeremiah Blanchard"
                            },
                            {
                                "name": "Jeremiah Blanchard"
                            }
                        ],
                        "meetTimes": [
                            {
                                "meetNo": 1,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "6:15 PM",
                                "meetTimeEnd": "8:10 PM",
                                "meetPeriodBegin": "11",
                                "meetPeriodEnd": "E1",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "7:20 PM",
                                "meetTimeEnd": "8:10 PM",
                                "meetPeriodBegin": "E1",
                                "meetPeriodEnd": "E1",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "1:55 PM",
                                "meetTimeEnd": "2:45 PM",
                                "meetPeriodBegin": "7",
                                "meetPeriodEnd": "7",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E121"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "4/30/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": 5831,
                        "classNumber": 11159,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Operating Systems",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Jeremiah Blanchard"
                            },
                            {
                                "name": "Jeremiah Blanchard"
                            },
                            {
                                "name": "Jeremiah Blanchard"
                            }
                        ],
                        "meetTimes": [
                            {
                                "meetNo": 1,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "6:15 PM",
                                "meetTimeEnd": "8:10 PM",
                                "meetPeriodBegin": "11",
                                "meetPeriodEnd": "E1",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "7:20 PM",
                                "meetTimeEnd": "8:10 PM",
                                "meetPeriodBegin": "E1",
                                "meetPeriodEnd": "E1",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "3:00 PM",
                                "meetTimeEnd": "3:50 PM",
                                "meetPeriodBegin": "8",
                                "meetPeriodEnd": "8",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E121"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "4/30/2019 @ 8:00 PM - 10:00 PM"
                    }
                ]
            },
            {
                "code": "COT3100",
                "courseId": "010956",
                "name": "Applications of Discrete Structures",
                "termInd": " ",
                "description": "Covers the mathematics of discrete events; i.e., events that involve distinct elements, finite structures of distinct elements or finite sampled versions of continuous phenomena (such as movement). (M)",
                "prerequisites": "Prereq: MAC 2233 or MAC 2311 or MAC 3472; Coreq: COP 3504 or COP 3503.",
                "sections": [
                    {
                        "number": "16GH",
                        "classNumber": 12919,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Appli Discrete Struc",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [
                            "Mathematics"
                        ],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Alper Ungor"
                            },
                            {
                                "name": "Alper Ungor"
                            },
                            {
                                "name": "Alper Ungor"
                            }
                        ],
                        "meetTimes": [
                            {
                                "meetNo": 1,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "7:25 AM",
                                "meetTimeEnd": "8:15 AM",
                                "meetPeriodBegin": "1",
                                "meetPeriodEnd": "1",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "7:25 AM",
                                "meetTimeEnd": "9:20 AM",
                                "meetPeriodBegin": "1",
                                "meetPeriodEnd": "2",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "9:35 AM",
                                "meetTimeEnd": "10:25 AM",
                                "meetPeriodBegin": "3",
                                "meetPeriodEnd": "3",
                                "meetBuilding": "MCCB",
                                "meetBldgCode": "0496",
                                "meetRoom": "G086"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": 1931,
                        "classNumber": 12920,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Appli Discrete Struc",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [
                            "Mathematics"
                        ],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Alper Ungor"
                            },
                            {
                                "name": "Alper Ungor"
                            },
                            {
                                "name": "Alper Ungor"
                            }
                        ],
                        "meetTimes": [
                            {
                                "meetNo": 1,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "7:25 AM",
                                "meetTimeEnd": "8:15 AM",
                                "meetPeriodBegin": "1",
                                "meetPeriodEnd": "1",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "7:25 AM",
                                "meetTimeEnd": "9:20 AM",
                                "meetPeriodBegin": "1",
                                "meetPeriodEnd": "2",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "9:35 AM",
                                "meetTimeEnd": "10:25 AM",
                                "meetPeriodBegin": "3",
                                "meetPeriodEnd": "3",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E220"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": 1934,
                        "classNumber": 12921,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Appli Discrete Struc",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [
                            "Mathematics"
                        ],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Alper Ungor"
                            },
                            {
                                "name": "Alper Ungor"
                            },
                            {
                                "name": "Alper Ungor"
                            }
                        ],
                        "meetTimes": [
                            {
                                "meetNo": 1,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "7:25 AM",
                                "meetTimeEnd": "8:15 AM",
                                "meetPeriodBegin": "1",
                                "meetPeriodEnd": "1",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "7:25 AM",
                                "meetTimeEnd": "9:20 AM",
                                "meetPeriodBegin": "1",
                                "meetPeriodEnd": "2",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "9:35 AM",
                                "meetTimeEnd": "10:25 AM",
                                "meetPeriodBegin": "3",
                                "meetPeriodEnd": "3",
                                "meetBuilding": "FLI",
                                "meetBldgCode": "0008",
                                "meetRoom": "0105"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": "1F82",
                        "classNumber": 12949,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Appli Discrete Struc",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [
                            "Mathematics"
                        ],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Alper Ungor"
                            },
                            {
                                "name": "Alper Ungor"
                            },
                            {
                                "name": "Alper Ungor"
                            }
                        ],
                        "meetTimes": [
                            {
                                "meetNo": 1,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "7:25 AM",
                                "meetTimeEnd": "8:15 AM",
                                "meetPeriodBegin": "1",
                                "meetPeriodEnd": "1",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "7:25 AM",
                                "meetTimeEnd": "9:20 AM",
                                "meetPeriodBegin": "1",
                                "meetPeriodEnd": "2",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "9:35 AM",
                                "meetTimeEnd": "10:25 AM",
                                "meetPeriodBegin": "3",
                                "meetPeriodEnd": "3",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E221"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": "25H6",
                        "classNumber": 12951,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Appli Discrete Struc",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [
                            "Mathematics"
                        ],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Alper Ungor"
                            },
                            {
                                "name": "Alper Ungor"
                            },
                            {
                                "name": "Alper Ungor"
                            }
                        ],
                        "meetTimes": [
                            {
                                "meetNo": 1,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "7:25 AM",
                                "meetTimeEnd": "8:15 AM",
                                "meetPeriodBegin": "1",
                                "meetPeriodEnd": "1",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "7:25 AM",
                                "meetTimeEnd": "9:20 AM",
                                "meetPeriodBegin": "1",
                                "meetPeriodEnd": "2",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "11:45 AM",
                                "meetTimeEnd": "12:35 PM",
                                "meetPeriodBegin": "5",
                                "meetPeriodEnd": "5",
                                "meetBuilding": "FLG",
                                "meetBldgCode": "0021",
                                "meetRoom": "0265"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": 3751,
                        "classNumber": 12952,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Appli Discrete Struc",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [
                            "Mathematics"
                        ],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Alper Ungor"
                            },
                            {
                                "name": "Alper Ungor"
                            },
                            {
                                "name": "Alper Ungor"
                            }
                        ],
                        "meetTimes": [
                            {
                                "meetNo": 1,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "7:25 AM",
                                "meetTimeEnd": "8:15 AM",
                                "meetPeriodBegin": "1",
                                "meetPeriodEnd": "1",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "7:25 AM",
                                "meetTimeEnd": "9:20 AM",
                                "meetPeriodBegin": "1",
                                "meetPeriodEnd": "2",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "11:45 AM",
                                "meetTimeEnd": "12:35 PM",
                                "meetPeriodBegin": "5",
                                "meetPeriodEnd": "5",
                                "meetBuilding": "MAEB",
                                "meetBldgCode": "0720",
                                "meetRoom": "0211"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 8:00 PM - 10:00 PM"
                    },
                    {
                        "number": 3761,
                        "classNumber": 12953,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Appli Discrete Struc",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [
                            "Mathematics"
                        ],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Alper Ungor"
                            },
                            {
                                "name": "Alper Ungor"
                            },
                            {
                                "name": "Alper Ungor"
                            }
                        ],
                        "meetTimes": [
                            {
                                "meetNo": 1,
                                "meetDays": [
                                    "T"
                                ],
                                "meetTimeBegin": "7:25 AM",
                                "meetTimeEnd": "8:15 AM",
                                "meetPeriodBegin": "1",
                                "meetPeriodEnd": "1",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 2,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "7:25 AM",
                                "meetTimeEnd": "9:20 AM",
                                "meetPeriodBegin": "1",
                                "meetPeriodEnd": "2",
                                "meetBuilding": "CAR",
                                "meetBldgCode": "0022",
                                "meetRoom": "0100"
                            },
                            {
                                "meetNo": 3,
                                "meetDays": [
                                    "R"
                                ],
                                "meetTimeBegin": "11:45 AM",
                                "meetTimeEnd": "12:35 PM",
                                "meetPeriodBegin": "5",
                                "meetPeriodEnd": "5",
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E221"
                            }
                        ],
                        "addEligible": "Y",
                        "grWriting": "N",
                        "dropaddDeadline": "01/11/2019",
                        "pastDeadline": false,
                        "finalExam": "5/1/2019 @ 8:00 PM - 10:00 PM"
                    }
                ]
            },
            {
                "code": "COT4501",
                "courseId": "021137",
                "name": "Numerical Analysis: a Computational Approach",
                "termInd": " ",
                "description": "Numerical integration, nonlinear equations, linear and nonlinear systems of equations, differential equations and interpolation.",
                "prerequisites": "Prereq: COP 3504 or COP 3503 and MAS 3114.",
                "sections": [
                    {
                        "number": 1090,
                        "classNumber": 12955,
                        "gradBasis": "GRD",
                        "acadCareer": "UGRD",
                        "display": "Num Analys Computa",
                        "credits": 3,
                        "credits_min": 3,
                        "credits_max": 3,
                        "note": "",
                        "dNote": "",
                        "genEd": [],
                        "sectWeb": "PC",
                        "rotateTitle": "",
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "Y",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Anand Rangarajan"
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
                                "meetBuilding": "CSE",
                                "meetBldgCode": "0042",
                                "meetRoom": "E119"
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
                "code": "EGN4912",
                "courseId": "026625",
                "name": "Engineering Directed Independent Research",
                "termInd": " ",
                "description": "Provides firsthand, supervised research with a faculty advisor or postdoctoral or graduate student mentor. Projects may involve inquiry, design, investigation, scholarship, discovery or application. (S-U)",
                "prerequisites": "",
                "sections": [
                    {
                        "number": "182G",
                        "classNumber": 14162,
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
                        "deptCode": 19140000,
                        "deptName": "Computer & Information Science & Engineering",
                        "courseFee": 0,
                        "lateFlag": "N",
                        "EEP": "N",
                        "LMS": "",
                        "instructors": [
                            {
                                "name": "Richard Newman"
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
            }
        ],
        "LASTCONTROLNUMBER": 2829,
        "RETRIEVEDROWS": 34,
        "TOTALROWS": 34
    }
]

function ciseDB(){
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

module.exports = ciseDB;
