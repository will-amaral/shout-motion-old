import { useState, Fragment } from 'react';
import { Box, Divider, Tab, Tabs } from '@material-ui/core';
import PropTypes from 'prop-types';

function TabNavigation(props) {
  const { tabs, ...rest } = props;
  const [currentTab, setCurrentTab] = useState(tabs[0].value);

  const handleTabsChange = (_, value) => {
    setCurrentTab(value);
  };

  return (
    <>
      <Tabs
        indicatorColor='primary'
        variant='scrollable'
        scrollButtons='auto'
        textColor='primary'
        value={currentTab}
        onChange={handleTabsChange}
      >
        {tabs.map((tab) => (
          <Tab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </Tabs>
      <Divider />
      <Box sx={{ mt: 3, color: 'text.primary' }}>
        {tabs.map((tab) => {
          const Content = tab.content;
          return (
            <Fragment key={tab.value}>
              {currentTab === tab.value && <Content {...rest} />}
            </Fragment>
          );
        })}
      </Box>
    </>
  );
}

TabNavigation.propTypes = {
  tabs: PropTypes.array.isRequired,
};

export default TabNavigation;
