import React, { useState } from 'react';
import copy from 'clipboard-copy';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';

const CopyToClipboard = (props) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const onCopy = (content) => {
    copy(content);
    setShowTooltip(true);
  };
  
  const handleOnTooltipClose = () => {
    setShowTooltip(false);
  };

  return (
    <Tooltip
      open={showTooltip}
      title={"Copied to clipboard!"}
      leaveDelay={1500}
      onClose={handleOnTooltipClose}
      {...props.TooltipProps || {}}
    >
      {props.children({ copy: onCopy })}
    </Tooltip>
  );
}

export default CopyToClipboard;