import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from '../common/Avatar';
import { display } from "@material-ui/system";

const useStyles = makeStyles(() => ({
  profile: {
    paddingTop: "3rem",
  },
}));

const Profile = ({ user }) => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.profile}
        spacing={4}
      >
        <Grid item>
          { /** 
           * 삼항 연산자
           * 조건 ? 조건이 참일 경우 실행 구문 : 조건이 거짓일 경우 실행 구문
           */ }

          { user ? <Avatar size={1} photoUrl={user.photoUrl} displayName={user.displayName} /> : (<p>유저 정보 받아와라!</p>) }
          {/* Avatar 컴포넌트를 불러오고 필요한 props를 전달해주세요. */}
          <Avatar
            size={2}
            displayName={user.displayName}
            photoUrl={user.photoUrl}
          />
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h6" component="h2" paragraph>
                {user.displayName} {/* 유저의 이름 */}
              </Typography>
            </Grid>
            <Grid item>
              <Grid container direction="row" spacing={2}>
                <Grid item>
                  <Typography variant="body1" component="h2" paragraph>
                    게시물 {user.feedList.length} {/* 게시물 갯수 */}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" component="h2" paragraph>
                    좋아하는 피드 수 {user.likeFeeds.length}{" "}
                    {/* 좋아하는 피드 수 */}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="caption" component="h2">
                {user.caption} {/* 유저의 설명문 */}
              </Typography>
              <Typography
                variant="subtitle2"
                color="primary"
                component="h2"
                gutterBottom
              >
                {/* 유저의 웹페이지를 새 탭으로 이동할 수 있게 해주세요. */}
                <a href={user.webpage} target="_blank">
                  {user.webpage}
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
