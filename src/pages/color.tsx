// import React from "react";
// import { MuiColorInput } from "mui-color-input";

// export default function ColorSelector() {
//   const [color, setColor] = React.useState("#ffffff");

//   const handleChange = (newValue) => {
//     setColor(newValue);
//   };

//   return (
//     <div>
//       <h1>Color Selector</h1>
//       <MuiColorInput value={color} onChange={handleChange} />
//     </div>
//   );
// }

// import React, { useState, useRef, useEffect } from "react";
// import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { SketchPicker } from "react-color";

// export default function App() {
//   const [color, setColor] = useState("#ff0000");
//   const [showPicker, setShowPicker] = useState(false);
//   const pickerRef = useRef(null);

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleColorChange = (newColor: any) => {
//     console.log("change", newColor.hex);
//     setColor(newColor.hex);
//   };

//   const handleTextChange = (event: any) => {
//     const newColor = event.target.value;
//     setColor(newColor);
//   };

//   const handleColorBoxClick = () => {
//     setShowPicker(!showPicker);
//   };

//   const handlePickerClose = () => {
//     setShowPicker(false);
//   };

//   const handleClickOutside = (event: any) => {
//     if (pickerRef.current && !pickerRef.current.contains(event.target)) {
//       setShowPicker(false);
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box my={10}>
//         <Box
//           display="flex"
//           flexDirection="row"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <Box
//             component="div"
//             sx={{
//               width: "30px",
//               height: "30px",
//               backgroundColor: color,
//               cursor: "pointer",
//               borderRadius: "5px",
//             }}
//             onClick={handleColorBoxClick}
//           />

//           <Box ml={2}>
//             <TextField
//               label="Color"
//               variant="outlined"
//               value={color}
//               size="small"
//               onChange={handleTextChange}
//             />
//           </Box>
//         </Box>
//       </Box>
//       {showPicker && (
//         <div ref={pickerRef}>
//           <SketchPicker
//             color={color}
//             onChange={handleColorChange}
//             disableAlpha={true}
//           />
//         </div>
//       )}
//     </Container>
//   );
// }
