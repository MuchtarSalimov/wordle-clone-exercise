import { ErrorComponent } from "@tanstack/react-router";
import { jsx } from "react/jsx-runtime";
//#region src/routes/users.$userId.tsx?tsr-split=errorComponent
function UserErrorComponent({ error }) {
	return /* @__PURE__ */ jsx(ErrorComponent, { error });
}
//#endregion
export { UserErrorComponent as errorComponent };
