import { useState, useRef } from "react";
import { motion, PanInfo } from "motion/react";

interface InteractiveDrawerProps {
  children: React.ReactNode;
  Frame30Component: React.ComponentType;
}

export function InteractiveDrawer({ children, Frame30Component }: InteractiveDrawerProps) {
  // Calculate positions
  // Search box is at top-[78px] with height around 50px + padding 16px = 94px
  // With 16px spacing below search box: 78 + 50 + 16 + 16 = 160px
  const COLLAPSED_Y = 510; // Original position
  const EXPANDED_Y = 160; // Position when expanded (16px below search box)
  
  const [drawerY, setDrawerY] = useState(COLLAPSED_Y);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const velocity = info.velocity.y;
    const offset = info.offset.y;
    
    // Determine if we should snap to expanded or collapsed based on drag direction and velocity
    if (isExpanded) {
      // Currently expanded, check if we should collapse
      if (offset > 50 || velocity > 500) {
        // Dragged down enough or fast enough - collapse
        setDrawerY(COLLAPSED_Y);
        setIsExpanded(false);
      } else {
        // Snap back to expanded
        setDrawerY(EXPANDED_Y);
      }
    } else {
      // Currently collapsed, check if we should expand
      if (offset < -50 || velocity < -500) {
        // Dragged up enough or fast enough - expand
        setDrawerY(EXPANDED_Y);
        setIsExpanded(true);
      } else {
        // Snap back to collapsed
        setDrawerY(COLLAPSED_Y);
      }
    }
  };

  const handleTap = () => {
    // Toggle between expanded and collapsed on tap
    if (isExpanded) {
      setDrawerY(COLLAPSED_Y);
      setIsExpanded(false);
    } else {
      setDrawerY(EXPANDED_Y);
      setIsExpanded(true);
    }
  };

  return (
    <>
      {children}
      <motion.div
        drag="y"
        dragConstraints={{ top: EXPANDED_Y, bottom: COLLAPSED_Y }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        animate={{ y: drawerY }}
        initial={{ y: COLLAPSED_Y }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300,
        }}
        className="absolute bg-[#f7f6f3] h-[1205px] left-0 shadow-[-213px_108px_67px_0px_rgba(0,0,0,0),-136px_69px_61px_0px_rgba(0,0,0,0.01),-77px_39px_52px_0px_rgba(0,0,0,0.05),-34px_17px_38px_0px_rgba(0,0,0,0.09),-9px_4px_21px_0px_rgba(0,0,0,0.1)] w-[402px] touch-none"
        style={{
          top: 0,
        }}
      >
        <Frame30Component />
        <div 
          className="-translate-x-1/2 absolute bg-[#eeede6] h-[4px] left-[calc(50%+0.5px)] rounded-[12px] top-[8px] w-[81px] cursor-grab active:cursor-grabbing" 
          onTap={handleTap}
        />
      </motion.div>
    </>
  );
}
