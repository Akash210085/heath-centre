import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Chat_History } from "../Data";
import { DownloadSimple, Image } from "@phosphor-icons/react";

const Timeline = ({ el }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Divider sx={{ width: "46%" }} />
      <Typography variant="caption">{el.text}</Typography>
      <Divider sx={{ width: "46%" }} />
    </Stack>
  );
};

const TextMsg = ({ el }) => {
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming ? "#fff" : "cadetblue",
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Typography variant="body2" color={!el.incoming && "#fff"}>
          {el.message}
        </Typography>
      </Box>
    </Stack>
  );
};

const ImgMsg = ({ el }) => {
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming ? "#fff" : "cadetblue",
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={1}>
          <img
            src={el.img}
            alt={el.message}
            style={{ maxHeight: 210, borderRadius: "10px" }}
          ></img>
          <Typography variant="body2" color={!el.incoming && "#fff"}>
            {el.message}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

const ReplyMsg = ({ el }) => {
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming ? "#fff" : "cadetblue",
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={1}
            spacing={2}
            alignItems={"center"}
            sx={{
              backgroundColor: el.incoming ? "cadetblue" : "#fff",
              borderRadius: 1,
            }}
          >
            <Typography variant="body2" color={el.incoming && "#fff"}>
              {el.message}
            </Typography>
          </Stack>
          <Typography variant="body2" color={!el.incoming && "#fff"}>
            {el.reply}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

const LinkMsg = ({ el }) => {
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming ? "#fff" : "cadetblue",
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={1}>
          <Stack spacing={1} alignItems={"center"}>
            <img
              src={el.preview}
              alt={el.message}
              style={{
                maxHeight: 210,
                borderRadius: "10px",
                color: !el.incoming && "#fff",
              }}
            ></img>
          </Stack>
          <Stack>
            <Typography variant="subtitle2" color={!el.incoming && "#fff"}>
              Create React App
            </Typography>
            <Typography
              variant="subtitle2"
              component={Link}
              to="//https://youtube.com"
              color={!el.incoming && "#fff"}
            >
              www.youtube.com
            </Typography>
          </Stack>
          <Typography variant="body2" color={!el.incoming && "#fff"}>
            {el.message}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

const DocMsg = ({ el }) => {
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming ? "#fff" : "cadetblue",
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={1}
            sx={{ borderRadius: 1 }}
          >
            <Image size={48} color={!el.incoming && "#fff"} />
            <Typography variant="caption" color={!el.incoming && "#fff"}>
              Abstract.png
            </Typography>
            <IconButton>
              <DownloadSimple color={!el.incoming && "#fff"} />
            </IconButton>
          </Stack>
          <Typography variant="body2" color={!el.incoming && "#fff"}>
            {el.message}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

function Message() {
  return (
    <Box pl={2} pr={2} sx={{ height: "100%" }}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              return <Timeline el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  return <ImgMsg el={el} />;
                case "doc":
                  return <DocMsg el={el} />;
                case "link":
                  return <LinkMsg el={el} />;
                case "reply":
                  return <ReplyMsg el={el} />;
                default:
                  return <TextMsg el={el} />;
              }
            default:
              return "";
          }
        })}
      </Stack>
    </Box>
  );
}

export default Message;
