import "./App.css";
import { createTheme, colors, ThemeProvider } from "@mui/material";
//lessonDefaultCustomize
const theme = createTheme({
  palette: {
    secondary: {
      main: colors.brown[500],
    },
  },

});

import { LessonThemeCustomize } from "./components/LessonThemeCustomize";
//import { LessonTimeLine } from "./components/LessonTimeLine";
//import { LessonMasonry } from "./components/LessonMasonry";
//import { LessonTabs } from "./components/LessonTabs";
//import { LessonDateRangePicker } from "./components/LessonDateRangePicker";
// import LessonDateTimePicker from "./components/LessonDateTimePicker";
// import LessonTable from "./components/LessonTable";
// import LessonLoadingButton from "./components/LessonLoadingButton";
// import LessonSkeleton from "./components/LessonSkeleton";
// import LessonSpinner from "./components/LessonSpinner";
// import LessonSnackbar from "./components/LessonSnackbar";
// import LessonDialog from "./components/LessonDialog";
// import LessonAlert from "./components/LessonAlert";
// import LessonList from "./components/LessonList";
// import LessonToolTip from "./components/LessonToolTip";
// import LessonAvatar from "./components/LessonAvatar";
// import LessonBottomNavigation from "./components/LessonBottomNavigation";
// import LessonSpeedDial from "./components/LessonSpeedDial";
// import LessonBadge from "./components/LessonBadge";
// import LessonDrawer from "./components/LessonDrawer";
// import LessonBreadcrumbs from "./components/LessonBreadcrumbs";
// import LessonLink from "./components/LessonLink";
// import LessonPaper from "./components/LessonPaper";
// import LessonImageList from "./components/LessonImageList";
// import LessonAppBar from "./components/LessonAppBar";
// import LessonAccordion from "./components/LessonAccordion";
// import LessonCard from "./components/LessonCard";
// import LessonGrid from "./components/LessonGrid";
// import LessonStack from "./components/LessonStack";
// import LessonBox from "./components/LessonBox";
// import LessonAutoComplete from "./components/LessonAutoComplete";
// import LessonButton from "./components/LessonButton";
// import LessonButtonGroup from "./components/LessonButtonGroup";
// import LessonCheckBoc from "./components/LessonCheckBoc";
// import LessonRadioGroup from "./components/LessonRadioGroup";
// import LessonSelect from "./components/LessonSelect";
// import LessonTextField from "./components/LessonTextField";
// import LessonTypography from "./components/LessonTypography";
// import OrnekRadioGroup from "./components/OrnekRadioGroup";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* <LessonTypography />
        <LessonButton />
        <LessonButtonGroup />
        <LessonTextField />
        <LessonRadioGroup />
        <OrnekRadioGroup />
        <LessonSelect />
        <LessonCheckBoc /> */}
        {/* <LessonAutoComplete/> */}
        {/* <LessonBox/> */}
        {/* <LessonStack/> */}
        {/* <LessonGrid/> */}
        {/* <LessonCard/> */}
        {/* <LessonAccordion/> */}
        {/* <LessonAppBar/> */}
        {/* <LessonImageList/> */}
        {/* <LessonPaper/> */}
        {/* <LessonLink/> */}
        {/* <LessonBreadcrumbs/> */}
        {/* <LessonDrawer/> */}
        {/* <LessonBadge/> */}
        {/* <LessonSpeedDial/> */}
        {/* <LessonBottomNavigation/> */}
        {/* <LessonAvatar/> */}
        {/* <LessonList/> */}
        {/* <LessonToolTip/> */}
        {/* <LessonAlert/> */}
        {/* <LessonDialog/> */}
        {/* <LessonSnackbar/> */}
        {/* <LessonSpinner/> */}
        {/* <LessonSkeleton/> */}
        {/* <LessonLoadingButton/> */}
        {/* <LessonTable/> */}
        {/* <LessonDateTimePicker/> */}
        {/* <LessonDateRangePicker/> */}
        {/* <LessonTabs/> */}
        {/* <LessonMasonry/> */}
        {/* <LessonTimeLine/> */}
        <LessonThemeCustomize />
      </div>
    </ThemeProvider>
  );
}

export default App;
