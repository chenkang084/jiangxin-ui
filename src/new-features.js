export const checkNewFeatures = action => {
  const isNewFeature = ["sourceCode"].indexOf(action) > -1;
  if (isNewFeature) {
    switch (action) {
      case "sourceCode":
        triggerSourceCode();
        break;

      default:
        break;
    }
  }
  return isNewFeature;
};

const triggerSourceCode = () => {
  const sourceCodeDom = $("#source-code"),
    textDom = $("#editor-wrap");

  const isShowSourceCode = textDom.is(":visible");

  if (isShowSourceCode) {
    sourceCodeDom.show();
    textDom.hide();
  } else {
    sourceCodeDom.hide();
    textDom.show();
  }
};
