"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// index.tsx
var antmin_exports = {};
__export(antmin_exports, {
  default: () => antmin_default
});
module.exports = __toCommonJS(antmin_exports);

// components/Antmin/Antmin.tsx
var import_react = require("react");
var import_Box = __toESM(require("@mui/material/Box"));

// components/Antmin/Antmin.styles.ts
var import_mui = require("tss-react/mui");
var useStyles = (0, import_mui.makeStyles)()((theme) => ({
  root: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    // IPad & Mobile Size
    [theme.breakpoints.down("md")]: {
      backgroundColor: "#fff"
    }
  },
  body: {
    position: "relative",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      padding: "0 16px"
    }
  },
  box: {
    width: "100%",
    height: "100%"
  },
  boxWidgetParent: {
    position: "fixed",
    right: 38,
    bottom: 122,
    height: "min(780px, 100% - 160px)",
    minHeight: 96,
    width: 486,
    maxHeight: 780,
    boxShadow: "0px 20px 24px rgba(16, 24, 40, 0.08)",
    borderRadius: 20,
    overflow: "hidden",
    opacity: 1,
    zIndex: 999,
    // transform
    transformOrigin: "right bottom",
    transition: "width 200ms ease 0s, height 200ms ease 0s, max-height 200ms ease 0s, transform 300ms cubic-bezier(0, 1.2, 1, 1) 0s, opacity 83ms ease-out 0s",
    [theme.breakpoints.down("sm")]: {
      height: "min(780px, 100% - 124px)",
      right: 0,
      bottom: 96,
      maxWidth: 486,
      margin: "0 16px",
      width: "calc(100% - 32px)"
    }
  },
  boxWidget: {
    width: "100%",
    height: "100%",
    position: "absolute"
  }
}));
var Antmin_styles_default = useStyles;

// components/Antmin/Antmin.tsx
var AntminForm = {
  email: "",
  problem: "",
  fix: "",
  title: "",
  priority: "Low",
  captureImg: [],
  uploadImg: [],
  errorEmail: false,
  errorProblem: false,
  errorFix: false,
  errorTitle: false
};
var Snackbar = {
  success: false,
  fail: false
};
function Antmin(props) {
  const { classes } = Antmin_styles_default();
  const { index, id, firebaseKey } = props;
  const [openButton, setOpenButton] = (0, import_react.useState)(false);
  const [openDialog, setOpenDialog] = (0, import_react.useState)(false);
  const [openSnackbar, setOpenSnackbar] = (0, import_react.useState)(Snackbar);
  const [report, setReport] = (0, import_react.useState)(AntminForm);
  return <>
    <BugSnackbar
      openSnackbar={openSnackbar}
      setOpenSnackbar={setOpenSnackbar}
    />
    <div className={classes.root}><main className={classes.body}><import_Box.default sx={{ position: "relative", height: "100%" }}><import_Box.default sx={{ width: "100%", height: "100%" }}>
      {index && <BugLauncher setOpenButton={setOpenButton} />}
      {index ? null : <BugDetail
        boxClass={index}
        setOpenButton={setOpenButton}
        setOpenDialog={setOpenDialog}
        setReport={setReport}
        report={report}
        firebaseKey={firebaseKey}
      />}
      {openButton && <import_Box.default className={classes.boxWidgetParent}><import_Box.default sx={{ width: "100%", height: "100%", position: "absolute" }}><BugDetail
        boxClass={index}
        setOpenButton={setOpenButton}
        setOpenDialog={setOpenDialog}
        setReport={setReport}
        report={report}
        firebaseKey={firebaseKey}
      /></import_Box.default></import_Box.default>}
      {openDialog && <ConfirmDialog
        id={id}
        BugReportForm={AntminForm}
        report={report}
        setReport={setReport}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        setOpenButton={setOpenButton}
        setOpenSnackbar={setOpenSnackbar}
      />}
    </import_Box.default></import_Box.default></main></div>
  </>;
}
Antmin.defaultProps = {
  index: true,
  id: void 0
};

// components/BugLauncher/BugLauncher.tsx
var import_image = __toESM(require("next/image"));
var import_Box2 = __toESM(require("@mui/material/Box"));
var import_Button = __toESM(require("@mui/material/Button"));

// components/BugLauncher/BugLauncher.styles.ts
var import_mui2 = require("tss-react/mui");
var useStyles2 = (0, import_mui2.makeStyles)()((theme) => ({
  rootOpenButton: {
    minWidth: 56,
    width: 56,
    height: 56,
    borderRadius: "50%",
    backgroundColor: "#FF5500",
    overflow: "hidden",
    boxShadow: "0px 20px 24px rgba(16, 24, 40, 0.08)",
    "&:hover": {
      backgroundColor: "#E64A19",
      boxShadow: "0px 20px 24px rgba(16, 24, 40, 0.08)"
    },
    // Positioning
    position: "fixed",
    bottom: 39,
    right: 38,
    zIndex: 999,
    [theme.breakpoints.down("sm")]: {
      right: 16,
      bottom: 24
    }
  },
  iconButtonBox: {
    position: "relative",
    width: 24,
    height: 24
  }
}));
var BugLauncher_styles_default = useStyles2;

// components/BugLauncher/BugLauncher.tsx
function BugLauncher(props) {
  const { classes } = BugLauncher_styles_default();
  const { setOpenButton } = props;
  const handleClickOpen = () => {
    setOpenButton((prev) => !prev);
  };
  return <import_Button.default
    onClick={handleClickOpen}
    className={classes.rootOpenButton}
  ><import_Box2.default className={classes.iconButtonBox}><import_image.default
    src={"https://firebasestorage.googleapis.com/v0/b/antmin-dev.appspot.com/o/antmin%2Fquestion-mark.svg?alt=media&token=194f9628-3ae8-4489-831d-2cdc925e96e6"}
    alt="launcher button"
    layout="fill"
    objectFit="cover"
    priority
  /></import_Box2.default></import_Button.default>;
}

// components/BugDetail/BugDetail.tsx
var import_Box3 = __toESM(require("@mui/material/Box"));

// components/BugDetail/BugDetail.styles.ts
var import_mui3 = require("tss-react/mui");
var useStyles3 = (0, import_mui3.makeStyles)()(() => ({
  bugBox: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    inset: 0,
    backgroundColor: "#fff"
  },
  bugMainBox: {
    display: "flex",
    flexGrow: 1
  },
  bugScroll: {
    position: "absolute",
    inset: 0,
    overflow: "hidden auto",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  bugForm: {
    padding: "24px 24px 120px 24px"
  },
  bugFormId: {
    padding: "24px"
  },
  iconButtonBox: {
    position: "relative",
    width: 24,
    height: 24
  },
  closeButtonPosition: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  closeButton: {
    paddingBottom: 8,
    padding: 5
  },
  closeButtonBox: {
    position: "relative",
    width: "14px",
    height: "14px"
  },
  textFieldEmail: {
    paddingTop: 8,
    "& .MuiOutlinedInput-root": {
      borderRadius: 8,
      height: 40,
      fontFamily: "FC Iconic",
      "& fieldset": {
        borderColor: "#D0D5DD",
        "& .Mui-focused": {
          borderColor: "#D0D5DD"
        },
        "&.MuiOutlinedInput-notchedOutline": {
          borderColor: "#D0D5DD"
        }
      }
    }
  },
  textFieldProblem: {
    paddingTop: 8,
    "& .MuiOutlinedInput-root": {
      borderRadius: 8,
      height: 108,
      fontFamily: "FC Iconic",
      "& fieldset": {
        borderColor: "#D0D5DD",
        "& .Mui-focused": {
          borderColor: "#D0D5DD"
        },
        "&.MuiOutlinedInput-notchedOutline": {
          borderColor: "#D0D5DD"
        }
      }
    }
  },
  bugSubmitBox: {
    zIndex: 999,
    height: "96px"
  },
  bugSubmit: {
    borderTop: "1px solid rgba(0,0,0,0.05)",
    backgroundColor: "#fff",
    padding: "24px"
  },
  submitButton: {
    background: "#FF5500",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#E64A19",
      boxShadow: "none"
    },
    height: 48,
    borderRadius: 8,
    fontFamily: "FC Iconic",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 20
  },
  h6: {
    fontFamily: "FC Iconic",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 28,
    lineHeight: "120%"
  },
  body2: {
    fontFamily: "FC Iconic",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "120%"
  },
  subtitle2: {
    fontFamily: "FC Iconic",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 18,
    lineHeight: "120%"
  }
}));
var BugDetail_styles_default = useStyles3;

// components/BugDetail/BugDetail.tsx
function BugDetail(props) {
  const {
    boxClass,
    setOpenButton,
    setOpenDialog,
    report,
    setReport,
    firebaseKey
  } = props;
  const { classes } = BugDetail_styles_default();
  return <import_Box3.default
    className={boxClass ? classes.bugBox : ""}
  >
    <import_Box3.default className={boxClass ? classes.bugMainBox : ""}><import_Box3.default className={boxClass ? classes.bugScroll : ""}><BugForm
      firebaseKey={firebaseKey}
      setOpenButton={setOpenButton}
      report={report}
      setReport={setReport}
      boxClass={boxClass}
    /></import_Box3.default></import_Box3.default>
    <BugSubmit boxClass={boxClass} setOpenDialog={setOpenDialog} report={report} setReport={setReport} />
  </import_Box3.default>;
}
BugDetail.defaultProps = {
  boxClass: true
};

// components/ConfirmDialog/ConfirmDialog.tsx
var import_react2 = require("react");
var import_axios = __toESM(require("axios"));
var import_Button2 = __toESM(require("@mui/material/Button"));
var import_Stack = __toESM(require("@mui/material/Stack"));
var import_Dialog = __toESM(require("@mui/material/Dialog"));
var import_Typography = __toESM(require("@mui/material/Typography"));
var import_DialogActions = __toESM(require("@mui/material/DialogActions"));
var import_CircularProgress = __toESM(require("@mui/material/CircularProgress"));

// components/ConfirmDialog/ConfirmDialog.styles.ts
var import_mui4 = require("tss-react/mui");
var useStyles4 = (0, import_mui4.makeStyles)()(() => ({
  rootDialog: {
    "& .MuiDialog-paper": {
      borderRadius: 20,
      padding: "24px 32px",
      maxWidth: 486,
      overflow: "hidden"
    }
  },
  cancelButton: {
    border: "2px solid #E64A19",
    color: "#E64A19",
    "&:hover": {
      border: "2px solid #E64A19",
      backgroundColor: "#FFE8DD"
    },
    fontFamily: "FC Iconic",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 20,
    height: 48,
    borderRadius: 8
  },
  confirmButton: {
    background: "#FF5500",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#E64A19",
      boxShadow: "none"
    },
    "&.Mui-disabled": {
      background: "#FFE8DD"
    },
    fontFamily: "FC Iconic",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 20,
    height: 48,
    borderRadius: 8
  },
  h6: {
    fontFamily: "FC Iconic",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 28,
    lineHeight: "120%"
  },
  body1: {
    fontFamily: "FC Iconic",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "120%"
  }
}));
var ConfirmDialog_styles_default = useStyles4;

// components/ConfirmDialog/ConfirmDialog.tsx
function ConfirmDialog(props) {
  const { classes } = ConfirmDialog_styles_default();
  const {
    report,
    BugReportForm,
    openDialog,
    setOpenDialog,
    setReport,
    id,
    setOpenButton,
    setOpenSnackbar
  } = props;
  const [isLoading, setIsLoading] = (0, import_react2.useState)(false);
  const handleCloseDialog = () => {
    setOpenDialog(true);
  };
  const handleConfirmSubmit = (e) => __async(this, null, function* () {
    e.preventDefault();
    setIsLoading(true);
    const body = {
      email: (report == null ? void 0 : report.email) || "",
      problem: (report == null ? void 0 : report.problem) || "",
      fix: (report == null ? void 0 : report.fix) || "",
      title: (report == null ? void 0 : report.title) || "",
      priority: (report == null ? void 0 : report.priority) || "",
      screenShot: (report == null ? void 0 : report.captureImg) || [],
      uploadImg: (report == null ? void 0 : report.uploadImg) || [],
      project: id || ""
    };
    try {
      yield import_axios.default.post("https://asia-southeast2-antmin-dev.cloudfunctions.net/notionHandler", body);
    } catch (error) {
      setOpenSnackbar((prev) => __spreadProps(__spreadValues({}, prev), {
        fail: true,
        success: false
      }));
      console.error(error, "post error");
    }
    setIsLoading(false);
    setOpenDialog(false);
    setOpenButton(false);
    setOpenSnackbar((prev) => __spreadProps(__spreadValues({}, prev), {
      success: true,
      fail: false
    }));
    setReport(BugReportForm);
  });
  return <import_Dialog.default
    open={openDialog}
    maxWidth="sm"
    fullWidth
    className={classes.rootDialog}
    disableEscapeKeyDown={isLoading}
  >
    <import_Typography.default
      className={classes.h6}
      color="#000"
    >{"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25"}</import_Typography.default>
    <import_Typography.default
      className={classes.body1}
      color="#475467"
      paddingTop="8px"
      paddingBottom="32px"
    >
      {"\u0E01\u0E23\u0E38\u0E13\u0E32\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E48\u0E2D\u0E19\u0E01\u0E14\u0E2A\u0E48\u0E07"}
      <br />
      {"\u0E2B\u0E25\u0E31\u0E07\u0E17\u0E35\u0E21\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E41\u0E25\u0E49\u0E27\u0E08\u0E30\u0E41\u0E08\u0E49\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E44\u0E02\u0E1B\u0E31\u0E0D\u0E2B\u0E32"}
      <br />
      {"\u0E44\u0E1B\u0E17\u0E32\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E17\u0E35\u0E48\u0E43\u0E2B\u0E49\u0E44\u0E27\u0E49"}
    </import_Typography.default>
    <import_DialogActions.default sx={{ padding: 0 }}><import_Stack.default direction="row" spacing={1} sx={{ width: "100%" }}>
      <import_Button2.default
        variant="outlined"
        fullWidth
        className={classes.cancelButton}
        onClick={handleCloseDialog}
        disabled={isLoading}
      >{"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01"}</import_Button2.default>
      <import_Button2.default
        variant="contained"
        fullWidth
        className={classes.confirmButton}
        onClick={handleConfirmSubmit}
        autoFocus
        disabled={isLoading}
      >{isLoading ? <import_CircularProgress.default sx={{ color: "#E64A19" }} size={24} /> : "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19"}</import_Button2.default>
    </import_Stack.default></import_DialogActions.default>
  </import_Dialog.default>;
}

// components/BugButton/BugButton.tsx
var import_react3 = require("react");
var import_image2 = __toESM(require("next/image"));
var import_Box4 = __toESM(require("@mui/material/Box"));
var import_Button3 = __toESM(require("@mui/material/Button"));

// components/BugButton/BugButton.styles.ts
var import_mui5 = require("tss-react/mui");
var useStyles5 = (0, import_mui5.makeStyles)()(() => ({
  iconButtonBox: {
    position: "relative",
    width: 24,
    height: 24
  },
  captureButton: {
    border: "2px solid #E64A19",
    color: "#E64A19",
    "&:hover": {
      border: "2px solid #E64A19",
      backgroundColor: "#FFE8DD"
    },
    height: 48,
    borderRadius: 8,
    fontFamily: "FC Iconic",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 20
  },
  dashedButton: {
    borderStyle: "dashed",
    border: "1px dashed #D74800",
    color: "#FF5500",
    backgroundColor: "#FFE8DD",
    "& .MuiButtonBase-root": {
      border: "1px dashed #D74800 !important"
    },
    "&:hover": {
      border: "1px dashed #D74800 !important",
      backgroundColor: "rgba(255, 85, 0, 0.25)"
    },
    height: 48,
    borderRadius: 8,
    fontFamily: "FC Iconic",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 20
  }
}));
var BugButton_styles_default = useStyles5;

// services/firebase/config.ts
var import_app = require("firebase/app");
var import_storage = require("firebase/storage");
var import_firestore = require("firebase/firestore");
var firebaseConfig = {};
var getFirebaseConfig = (config) => __async(void 0, null, function* () {
  firebaseConfig = config;
  const apps = (0, import_app.getApps)();
  const app = apps.length ? (0, import_app.getApp)() : firebaseConfig ? (0, import_app.initializeApp)(firebaseConfig) : null;
  const db = app ? (0, import_firestore.getFirestore)(app) : null;
  return {
    db,
    storage: {
      getDownloadURL: import_storage.getDownloadURL,
      getStorage: import_storage.getStorage,
      ref: import_storage.ref,
      uploadBytes: import_storage.uploadBytes,
      deleteObject: import_storage.deleteObject
    }
  };
});

// components/BugButton/BugButton.tsx
function BugButton(props) {
  const {
    setReport,
    firebaseKey
  } = props;
  const { classes } = BugButton_styles_default();
  const refButton = (0, import_react3.useRef)(null);
  const handleUpload = (e) => __async(this, null, function* () {
    const { files } = e.target;
    if (!files || files.length < 0)
      return;
    const { storage } = yield getFirebaseConfig(firebaseKey);
    const {
      getDownloadURL: getDownloadURL2,
      getStorage: getStorage2,
      ref: ref2,
      uploadBytes: uploadBytes2
    } = storage;
    try {
      const newUploads = [];
      const fileArray = Object.values(files);
      const uploadPromises = fileArray.filter((file) => file.type.startsWith("image/") || file.type.startsWith("video/")).map((file) => __async(this, null, function* () {
        const storageRef = ref2(getStorage2(), `uploads/${file.name}`);
        const snapshot = yield uploadBytes2(storageRef, file);
        const downloadUrl = yield getDownloadURL2(snapshot.ref);
        return {
          uploadFile: file,
          type: "external",
          external: { url: downloadUrl },
          name: file.name
        };
      }));
      const uploadedFiles = yield Promise.all(uploadPromises);
      newUploads.push(...uploadedFiles);
      setReport((prevState) => __spreadProps(__spreadValues({}, prevState), {
        uploadImg: [...prevState.uploadImg, ...newUploads]
      }));
    } catch (error) {
      console.error("image is invalid");
    }
  });
  return <import_Box4.default
    paddingTop="16px"
    position="relative"
  ><import_Button3.default
    variant="outlined"
    fullWidth
    startIcon={<import_Box4.default className={classes.iconButtonBox}><import_image2.default
      src={"https://firebasestorage.googleapis.com/v0/b/antmin-dev.appspot.com/o/antmin%2Fcloud-upload.svg?alt=media&token=32d46484-cd8c-4801-8442-5822b55c7eef"}
      alt="button icon"
      layout="fill"
      objectFit="cover"
    /></import_Box4.default>}
    onClick={() => refButton.current && refButton.current.click()}
    className={classes.dashedButton}
  >
    {"\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E/\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D"}
    <input hidden accept="image/*" multiple type="file" ref={refButton} onChange={(e) => handleUpload(e)} />
  </import_Button3.default></import_Box4.default>;
}

// components/BugImage/BugImage.tsx
var import_image3 = __toESM(require("next/image"));
var import_Box5 = __toESM(require("@mui/material/Box"));
var import_Button4 = __toESM(require("@mui/material/Button"));
var import_DeleteForever = __toESM(require("@mui/icons-material/DeleteForever"));

// components/BugImage/BugImage.styles.ts
var import_mui6 = require("tss-react/mui");
var useStyles6 = (0, import_mui6.makeStyles)()(() => ({
  cardBox: {
    width: "147px",
    height: "147px",
    marginRight: "16px",
    marginTop: "16px",
    border: "2px solid #FF5500",
    borderRadius: "8px"
  },
  imageBox: {
    width: "100%",
    height: "100%",
    position: "relative"
  },
  iconButtonBox: {
    position: "absolute",
    width: 24,
    height: 24,
    top: -8,
    bottom: -8
  },
  iconButton: {
    padding: 0,
    borderRadius: "50%",
    backgroundColor: "#fff",
    boxShadow: "3px 3px 8px rgba(255, 232, 221, 1)",
    color: "#FF5500",
    width: 24,
    height: 24,
    minWidth: 24,
    "&:hover": {
      backgroundColor: "#D9D9D9"
    }
  }
}));
var BugImage_styles_default = useStyles6;

// components/BugImage/BugImage.tsx
function BugImage(props) {
  const { classes } = BugImage_styles_default();
  const { image, setReport, firebaseKey } = props;
  const handleDelete = (itemUrl) => __async(this, null, function* () {
    const { storage } = yield getFirebaseConfig(firebaseKey);
    const {
      deleteObject: deleteObject2,
      getStorage: getStorage2,
      ref: ref2
    } = storage;
    setReport((prev) => __spreadProps(__spreadValues({}, prev), {
      uploadImg: prev.uploadImg.filter((item) => item.external.url !== itemUrl)
    }));
    const storageRef = ref2(getStorage2(), itemUrl);
    try {
      yield deleteObject2(storageRef);
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  });
  return <import_Box5.default flexWrap="wrap" display="flex" position="relative">{image.map((item) => <import_Box5.default
    className={classes.cardBox}
    position="relative"
    key={item.external.url}
  >
    <import_Box5.default className={classes.imageBox}><import_image3.default
      src={item.external.url}
      alt={item.name}
      layout="fill"
      objectFit="cover"
      style={{ borderRadius: "8px" }}
    /></import_Box5.default>
    <import_Box5.default position="absolute" top="-8px" right="-8px" className={classes.iconButtonBox}><import_Button4.default
      className={classes.iconButton}
      onClick={() => handleDelete(item.external.url)}
    ><import_DeleteForever.default /></import_Button4.default></import_Box5.default>
  </import_Box5.default>)}</import_Box5.default>;
}

// components/BugPriority/BugPriority.tsx
var import_Box6 = __toESM(require("@mui/material/Box"));
var import_MenuItem = __toESM(require("@mui/material/MenuItem"));
var import_FormControl = __toESM(require("@mui/material/FormControl"));
var import_Select = __toESM(require("@mui/material/Select"));

// components/BugPriority/BugPriority.styles.ts
var import_mui7 = require("tss-react/mui");
var useStyles7 = (0, import_mui7.makeStyles)()(() => ({
  selectBox: {
    borderRadius: "8px",
    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000"
    }
  }
}));
var BugPriority_styles_default = useStyles7;

// components/BugPriority/BugPriority.tsx
function BugPriority(props) {
  const { report, setReport } = props;
  const { classes } = BugPriority_styles_default();
  const handleChange = (event) => {
    setReport((prev) => __spreadProps(__spreadValues({}, prev), {
      priority: event.target.value
    }));
  };
  const status = [
    "High",
    "Medium",
    "Low"
  ];
  return <import_Box6.default position="relative" paddingTop="8px"><import_FormControl.default fullWidth><import_Select.default
    value={report.priority}
    onChange={handleChange}
    defaultValue="Low"
    className={classes.selectBox}
  >{status.map((item) => <import_MenuItem.default
    key={item}
    value={item}
  >{item}</import_MenuItem.default>)}</import_Select.default></import_FormControl.default></import_Box6.default>;
}

// components/BugForm/BugForm.tsx
var import_image4 = __toESM(require("next/image"));
var import_Box7 = __toESM(require("@mui/material/Box"));
var import_IconButton = __toESM(require("@mui/material/IconButton"));
var import_Typography2 = __toESM(require("@mui/material/Typography"));
var import_TextField = __toESM(require("@mui/material/TextField"));
function BugForm(props) {
  const { classes } = BugDetail_styles_default();
  const {
    boxClass,
    setOpenButton,
    report,
    setReport,
    firebaseKey
  } = props;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setReport((prevReport) => __spreadProps(__spreadValues({}, prevReport), {
      [name]: value
    }));
  };
  const handleClickClose = () => {
    setOpenButton(false);
  };
  return <import_Box7.default
    className={boxClass ? classes.bugForm : classes.bugFormId}
  >
    <import_Box7.default className={classes.closeButtonPosition} position="relative">{boxClass && <import_IconButton.default
      className={classes.closeButton}
      onClick={handleClickClose}
    ><import_Box7.default className={classes.closeButtonBox}><import_image4.default
      src={"https://firebasestorage.googleapis.com/v0/b/antmin-dev.appspot.com/o/antmin%2FVector.svg?alt=media&token=879647c6-6f9f-4fcd-995b-832ec2017803"}
      alt="close icon"
      layout="fill"
      objectFit="cover"
    /></import_Box7.default></import_IconButton.default>}</import_Box7.default>
    <import_Box7.default position="relative"><import_Typography2.default
      aria-label="title"
      className={classes.h6}
      color="#000"
    >{"\u{1F41E} \u0E41\u0E08\u0E49\u0E07\u0E1B\u0E31\u0E0D\u0E2B\u0E32"}</import_Typography2.default></import_Box7.default>
    <import_Box7.default position="relative">
      <import_Typography2.default
        className={classes.body2}
        color="#101828"
        paddingTop="32px"
      >
        {"\u0E2D\u0E35\u0E40\u0E21\u0E25"}
        {report.errorEmail && <span style={{ color: "red", fontSize: "14px", fontWeight: 400 }}> * </span>}
      </import_Typography2.default>
      <import_TextField.default
        placeholder={"\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E2D\u0E35\u0E40\u0E21\u0E25"}
        type="text"
        fullWidth
        name="email"
        value={report.email}
        onChange={handleChange}
        className={classes.textFieldEmail}
      />
    </import_Box7.default>
    <import_Box7.default position="relative">
      <import_Typography2.default
        className={classes.body2}
        color="#101828"
        paddingTop="16px"
      >
        {"\u0E1B\u0E31\u0E0D\u0E2B\u0E32"}
        {report.errorProblem && <span style={{ color: "red", fontSize: "14px", fontWeight: 400 }}> * </span>}
      </import_Typography2.default>
      <import_TextField.default
        placeholder={"\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E1B\u0E31\u0E0D\u0E2B\u0E32"}
        type="text"
        fullWidth
        name="title"
        value={report.title}
        onChange={handleChange}
        className={classes.textFieldEmail}
      />
    </import_Box7.default>
    <import_Box7.default position="relative">
      <import_Typography2.default
        className={classes.body2}
        color="#101828"
        paddingTop="16px"
      >
        {"\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E1B\u0E31\u0E0D\u0E2B\u0E32"}
        {report.errorProblem && <span style={{ color: "red", fontSize: "14px", fontWeight: 400 }}> * </span>}
      </import_Typography2.default>
      <import_TextField.default
        placeholder={"\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E02\u0E2D\u0E07\u0E1B\u0E31\u0E0D\u0E2B\u0E32"}
        type="text"
        fullWidth
        multiline
        name="problem"
        value={report.problem}
        onChange={handleChange}
        rows={4}
        className={classes.textFieldProblem}
      />
    </import_Box7.default>
    <import_Box7.default position="relative">
      <import_Typography2.default
        className={classes.body2}
        color="#101828"
        paddingTop="16px"
      >
        {"\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E32\u0E01\u0E43\u0E2B\u0E49\u0E41\u0E01\u0E49\u0E44\u0E02"}
        {report.errorFix && <span style={{ color: "red", fontSize: "14px", fontWeight: 400 }}> * </span>}
      </import_Typography2.default>
      <import_TextField.default
        placeholder={"\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E32\u0E01\u0E41\u0E01\u0E49\u0E44\u0E02"}
        type="text"
        fullWidth
        multiline
        name="fix"
        value={report.fix}
        onChange={handleChange}
        rows={4}
        className={classes.textFieldProblem}
      />
    </import_Box7.default>
    <import_Box7.default position="relative">
      <import_Typography2.default
        className={classes.body2}
        color="#101828"
        paddingTop="16px"
      >Priority</import_Typography2.default>
      <BugPriority
        report={report}
        setReport={setReport}
      />
    </import_Box7.default>
    <import_Box7.default position="relative">
      <import_Typography2.default
        className={classes.subtitle2}
        color="#000"
        paddingTop="16px"
      >{"\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E23\u0E39\u0E1B/\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D"}</import_Typography2.default>
      <import_Typography2.default
        className={classes.body2}
        color="#475467"
        paddingTop="8px"
      >{"\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E23\u0E39\u0E1B/\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D"}</import_Typography2.default>
    </import_Box7.default>
    <BugImage image={report.uploadImg} setReport={setReport} firebaseKey={firebaseKey} />
    <BugButton setReport={setReport} firebaseKey={firebaseKey} />
  </import_Box7.default>;
}
BugForm.defaultProps = {
  boxClass: true
};

// components/BugSubmit/BugSubmit.tsx
var import_image5 = __toESM(require("next/image"));
var import_Box8 = __toESM(require("@mui/material/Box"));
var import_Button5 = __toESM(require("@mui/material/Button"));

// utils/validator/validator.ts
var Validator = {
  // return false when it is not email
  isEmail: (value) => {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailTest = reg.test(String(value).toLowerCase()) && value.length > 0;
    return emailTest;
  },
  isMatchNumber: (value) => value.match(/^[0-9]*$/) !== null,
  // return false when it is empty
  isNotEmpty: (value) => value.trim() !== ""
};

// components/BugSubmit/BugSubmit.tsx
function BugSubmit(props) {
  const { classes } = BugDetail_styles_default();
  const {
    boxClass,
    setOpenDialog,
    report,
    setReport
  } = props;
  const validateField = (fieldName, value, validationRule) => {
    if (!validationRule(value)) {
      setReport((prev) => __spreadProps(__spreadValues({}, prev), { [fieldName]: true }));
      return false;
    }
    setReport((prev) => __spreadProps(__spreadValues({}, prev), { [fieldName]: false }));
    return true;
  };
  const validate = () => {
    let isValid = true;
    const isEmailValid = validateField("errorEmail", report.email, Validator.isEmail);
    const isTitleValid = validateField("errorTitle", report.title, Validator.isNotEmpty);
    const isProblemValid = validateField("errorProblem", report.problem, Validator.isNotEmpty);
    const isFixValid = validateField("errorFix", report.fix, Validator.isNotEmpty);
    isValid = isEmailValid && isTitleValid && isProblemValid && isFixValid;
    return isValid;
  };
  const handleClickSubmit = () => {
    if (validate()) {
      setOpenDialog(true);
    }
  };
  return <import_Box8.default className={boxClass ? classes.bugSubmitBox : ""}><import_Box8.default className={classes.bugSubmit}><import_Button5.default
    variant="contained"
    fullWidth
    startIcon={<import_Box8.default className={classes.iconButtonBox}><import_image5.default
      src={"https://firebasestorage.googleapis.com/v0/b/antmin-dev.appspot.com/o/antmin%2Fsend-diagonal.svg?alt=media&token=a32ec9bf-84b4-4d30-8bb7-4ac1e74640ee"}
      alt="submit icon"
      layout="fill"
      objectFit="cover"
    /></import_Box8.default>}
    onClick={handleClickSubmit}
    className={classes.submitButton}
  >{"\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25"}</import_Button5.default></import_Box8.default></import_Box8.default>;
}
BugSubmit.defaultProps = {
  boxClass: true
};

// components/BugSnackbar/BugSnackbar.tsx
var import_Alert = __toESM(require("@mui/material/Alert"));
var import_Snackbar = __toESM(require("@mui/material/Snackbar"));
function BugSnackbar(props) {
  const { openSnackbar, setOpenSnackbar } = props;
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar((prev) => __spreadProps(__spreadValues({}, prev), {
      success: false,
      fail: false
    }));
  };
  return <>
    {
      /* Alert Submission Successful */
    }
    {openSnackbar.success && <import_Snackbar.default
      open={openSnackbar.success}
      autoHideDuration={4e3}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    ><import_Alert.default onClose={handleClose} severity="success" sx={{ width: "100%" }}>Submission Successful</import_Alert.default></import_Snackbar.default>}
    {
      /* Alert Submission Fail */
    }
    {openSnackbar.fail && <import_Snackbar.default
      open={openSnackbar.fail}
      autoHideDuration={6e3}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    ><import_Alert.default onClose={handleClose} severity="error" sx={{ width: "100%" }}>Submission Fail</import_Alert.default></import_Snackbar.default>}
  </>;
}

// index.tsx
var antmin_default = Antmin;
