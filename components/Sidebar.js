function Sidebar() {
  return (
    <div>
      <div>
        {/* <img
          src="https://pbs.twimg.com/profile_banners/44196397/1576183471/1080x360"
          alt=""
        /> */}
        <Avatar src={user.photoURL}>{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div>
        <div>
          <p>Who viewed you</p>
          <p>2,543</p>
        </div>
        <div>
          <p>Views on post</p>
          <p>2,448</p>
        </div>
      </div>

      <div>
        <p>Recent </p>
        {recentItem("spacex")}
        {recentItem("tesla")}
        {recentItem("dogecoin")}
        {recentItem("spacex")}
        {recentItem("spacex")}
        {recentItem("spacex")}
      </div>
    </div>
  );
}

export default Sidebar;
