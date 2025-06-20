(() => {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 3780:
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__HjAUt"
};


/***/ }),

/***/ 3730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MeetupDetailsPage),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: ./components/meetups/MeetupDetail.module.css
var MeetupDetail_module = __webpack_require__(3780);
var MeetupDetail_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetail_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupDetails.js


function MeetupDetails(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (MeetupDetail_module_default()).detail,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: props.image,
                alt: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("address", {
                children: props.address
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: props.description
            })
        ]
    });
}

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/[meetupId]/index.js




function MeetupDetailsPage(props) {
    const { meetupData  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            meetupData.title,
                            " "
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: meetupData.description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MeetupDetails, {
                title: meetupData.title,
                image: meetupData.image,
                address: meetupData.address,
                description: meetupData.description
            })
        ]
    });
}
async function getStaticPaths() {
    const client = await external_mongodb_.MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const meetsupCollection = db.collection("meetsup");
    const meetsups = await meetsupCollection.find({}, {
        _id: 1
    }).toArray();
    client.close();
    return {
        fallback: false,
        paths: meetsups.map((meetsup)=>({
                params: {
                    meetupId: meetsup._id.toString()
                }
            }))
    };
}
async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    const client = await external_mongodb_.MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const meetsupCollection = db.collection("meetsup");
    const selectedMeetup = await meetsupCollection.findOne({
        _id: new external_mongodb_.ObjectId(meetupId)
    });
    client.close();
    console.log("Selected meetup:", selectedMeetup);
    if (!selectedMeetup) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    };
}


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3730));
module.exports = __webpack_exports__;

})();