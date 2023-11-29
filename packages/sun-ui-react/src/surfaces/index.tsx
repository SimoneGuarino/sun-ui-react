import { generateDynamicStyled } from "@sun-ui/system/dist/generateDynamicStyled";

export const Surface = generateDynamicStyled({
  component: 'div',
  name: 'sun-ui-surface',
  slot: 'sun-ui-surface',
  sx: {  
    //backgroundColor: "hotpink",
    fontSize: "24px",
    color: "black",
    transition: "width 100ms linear, height 100ms linear, box-shadow 250ms ease-in-out",
    position: "relative",
    },
  additionalStyle: ({ ownerState }) => ({
    padding: `${typeof ownerState.p == 'number' ? 
      (ownerState.p * 3) : ownerState.p}`,
    width: `${ownerState.width}`,
    height: `${ownerState.height}`,
    boxShadow: `0px 0px ${ownerState.elevation}px 0px rgb(0 0 0 / 46%)`, 
    zIndex: `${ownerState.elevation}`,
    borderRadius: `${ownerState.borderRadius}`,
    transform: `translateZ(${ownerState.elevation * 4}px)`,
    //transform: `perspective(5000px) translate(0%, 0%) translateZ(${ownerState.elevation}px)`,
    "&::after": {
      content: `''`,
      borderRadius: `${ownerState.borderRadius}`,
      bottom: "0px",
      position: "absolute",
      right: 0,
      left: 0,
      height: "100%",
      width: '100%',
      background: "inherit",
      transform: "perspective(5000px) translate(0%, 0%) translateZ(1px)",
    }
  }),
});