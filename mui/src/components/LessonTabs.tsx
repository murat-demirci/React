import {TabList,Tab,Tabs,TabPanel} from '@mui/joy'
import React, { useState } from "react";

export const LessonTabs = () => {
  return (
    <Tabs defaultValue={0}>
        <TabList>
            <Tab>First</Tab>
            <Tab>Second</Tab>
            <Tab>Third</Tab>
        </TabList>
        <TabPanel value={0}>
            First
        </TabPanel>
        <TabPanel value={1}>
            Second
        </TabPanel>
        <TabPanel value={2}>
            Third
        </TabPanel>
    </Tabs>
  )
}

