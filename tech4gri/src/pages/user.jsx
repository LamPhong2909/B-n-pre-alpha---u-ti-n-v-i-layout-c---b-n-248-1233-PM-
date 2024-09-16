import React, { Suspense } from "react";
import {
  Avatar,
  List,
  Text,
  Box,
  Page,
  Button,
  Icon,
  useNavigate,
  Header,
} from "zmp-ui";
import { useRecoilValue } from "recoil";
import { displayNameState, userState } from "../state";
import Layout from "./Layout";

const UserPageContent = () => {
  const { userInfo: user } = useRecoilValue(userState);
  const displayName = useRecoilValue(displayNameState);
  const navigate = useNavigate();

  return (
    
    <Box
      flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      style={{ paddingTop: '70px' }}
    >

      <Box>
        <Avatar
          story="default"
          size={96}
          online
          src={user?.avatar?.startsWith("http") ? user.avatar : undefined}
        >
          {user?.avatar || "?"}
        </Avatar>
      </Box>
      <Box flex flexDirection="row" alignItems="center" ml={8}>
        <Box>
          <Text.Title>{displayName || user?.name || "No Name"}</Text.Title>
        </Box>
        <Box ml={4}>
          <Button
            onClick={() => {
              navigate("/form");
            }}
            size="small"
            icon={<Icon icon="zi-edit" />}
          />
        </Box>
      </Box>
      <Box m={0} p={0} mt={4}>
        <div className="section-container">
          <List>
            <List.Item title="Name" subTitle={user?.name || "Loading..."} />
            <List.Item title="Display Name" subTitle={displayName || "Loading..."} />
            <List.Item title="ID" subTitle={user?.id || "Loading..."} />
          </List>
        </div>
      </Box>
    </Box>
  );
};

const UserPage = () => {
  return (
    <Page className="page">
      <Suspense fallback={<Text.Title>Loading...</Text.Title>}>
        <UserPageContent />
      </Suspense>
      <Layout />
    </Page>
  );
};

export default UserPage;
