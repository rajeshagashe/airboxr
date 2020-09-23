import { Typography, Button, Box, IconButton } from "@material-ui/core";
import React from "react";
import {
  PageContainer,
  FixedTopBar,
  FixedMiddleBodyWithVerticalScroll,
  FixedBottomPominentButton,
  TopbarBackButton
} from "./layout-components";
import _ from "lodash";

export default ExamplePage = () => {
  const topbarLeftButton: TopbarBackButton = {
    type: "back",
    onClick: () => console.log("Clicked back")
  };
  return (
    <PageContainer>
      <FixedTopBar title="Example Page Title" leftButton={topbarLeftButton} />
      <FixedMiddleBodyWithVerticalScroll>
        {/* Body goes here */}
      </FixedMiddleBodyWithVerticalScroll>
      <FixedBottomPominentButton
        title="Test / Debug"
        onClick={() =>
          console.log("TODO - whatever you wantididid to test/debug")
        }
      />
    </PageContainer>
  );
};
