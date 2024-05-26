import React from "react";
import { Box, Stack, Avatar, Typography, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",

      right: 0.0001,
      bottom: 0.0001,
      width: "80%",
      height: "80%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
function ChatElement({ id, img, name, msg, time, unread, pinned, online }) {
  const shortMsg = msg.substr(0, 10) + "...";
  return (
    <Box
      p={1}
      sx={{
        width: "100%",
        borderRadius: 2,
        backgroundColor: "#fff",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack spacing={2} direction={"row"} alignItems={"center"}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              sx={{ width: 30, height: 30 }}
            >
              <Avatar sx={{ width: 30, height: 30 }} alt="A" src={img} />
            </StyledBadge>
          ) : (
            <Avatar sx={{ width: 30, height: 30 }} alt="A" src={img} />
          )}

          <Stack>
            <Typography variant="subtitle2" fontSize={14}>
              {name}
            </Typography>
            <Typography variant="caption" fontSize={11}>
              {shortMsg}
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={1} alignItems={"center"}>
          <Typography variant="caption" fontWeight={600}>
            {time}
          </Typography>
          <Badge
            badgeContent={unread}
            color="primary"
            sx={{
              "& .MuiBadge-badge": {
                fontSize: 9,
                height: 15,
                minWidth: 1,
                width: 15,
              },
            }}
          ></Badge>
        </Stack>
      </Stack>
    </Box>
  );
}

export default ChatElement;
