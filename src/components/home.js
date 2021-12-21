import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import avatar from "../assets/imgs/avatar.jpg";
import photo1 from "../assets/imgs/photo1.jpg";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import PhoneIcon from "@material-ui/icons/Phone";
import VideocamIcon from "@material-ui/icons/Videocam";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    overflow: "auto",
    maxHeight: "300vh",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },

  appBar1: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
    },
    left: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    /* flexGrow: 1,
    padding: theme.spacing(3), */
  },
}));

function AllChats(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [seePerfil, setSeePerfil] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography> */}

          <div className="py-2 px-4 border-bottom d-none d-lg-block w-100">
            <div className="d-flex align-items-center py-1">
              <div className="position-relative">
                <img
                  src={photo1}
                  className="rounded-circle mr-1"
                  alt="Edmilson Kayce"
                  width="40"
                  height="40"
                />
              </div>
              <div className="flex-grow-1 ps-3 text-start">
                <strong>Edmilson Kayce</strong>
                <div className="text-muted small text-ligth">
                  <em className="text-light">A escrever...</em>
                </div>
              </div>
              <div>
                <Button title="Chamada">
                  {" "}
                  <PhoneIcon
                    style={{ fontSize: 32, color: "white" }}
                    className="ms-2"
                  />
                </Button>

                <Button title="Video-chamada">
                  {" "}
                  <VideocamIcon
                    style={{ fontSize: 32, color: "white" }}
                    className="ms-2"
                  />
                </Button>
                <Button
                  title="Meu perfil"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  <MoreVertIcon
                    style={{ fontSize: 32, color: "white" }}
                    className="ms-2"
                  />
                </Button>
                <ul className="dropdown-menu ms-3">
                  <li onClick={() => setSeePerfil(!seePerfil)}>
                    <span
                      className="dropdown-item dropButton-item"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        cursor: "pointer",
                      }}
                    >
                      Meu perfil
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {seePerfil ? (
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              <div>
                <AppBar position="fixed" className={classes.appBar1}>
                  <Toolbar>
                    {/* <Typography variant="h6" noWrap>
                  Chat
                </Typography> */}

                    <div className="py-2 px-4 border-bottom d-none d-lg-block w-100">
                      <div className="d-flex align-items-center py-1">
                        <div className="flex-grow-1 pl-3 text-start">
                          <h6>
                            <Button
                              title="Voltar"
                              onClick={() => setSeePerfil(!seePerfil)}
                            >
                              {" "}
                              <ArrowBackIosIcon
                                style={{ color: "white" }}
                                className="ms-2"
                              />
                            </Button>
                            <span>Perfil do utilizador</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </Toolbar>
                </AppBar>
                <div className={classes.toolbar} />
                <Divider />

                <div>
                  <img
                    src={avatar}
                    className="rounded-circle mr-1 mt-5"
                    alt="Chris Wood"
                    width="120"
                    height="120"
                  />
                </div>
                <div className="flex-grow-1 pl-3 text-end mt-5 me-5">
                  
                  <AddAPhotoIcon/>
                </div>

                <div className="flex-grow-1 pl-3 text-start mt-5 ms-3">
                  <h6>
                    <span>Alzira Xerinda</span>
                  </h6>
                </div>
                <br />
                <div className="flex-grow-1 pl-3 text-start ms-3">
                  <h6>
                    <span>+258 843968894</span>
                  </h6>
                </div>
                <br />

                <div className="flex-grow-1 pl-3 text-start ms-3 ">
                  <h6>
                    <span>Olá, estou usando o Chat</span>
                  </h6>
                </div>
              </div>
            </Drawer>
          </Hidden>
        </nav>
      ) : (
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              <div>
                <AppBar position="fixed" className={classes.appBar1}>
                  <Toolbar>
                    {/* <Typography variant="h6" noWrap>
                  Chat
                </Typography> */}

                    <div className="py-2 px-4 border-bottom d-none d-lg-block w-100">
                      <div className="d-flex align-items-center py-1">
                        <div className="flex-grow-1 pl-3 text-start">
                          <h4>
                            <strong>Chats</strong>
                          </h4>
                        </div>
                        <div>
                          <QuestionAnswerIcon style={{ fontSize: 32 }} />
                        </div>
                      </div>
                    </div>
                  </Toolbar>
                </AppBar>
                <div className={classes.toolbar} />
                <Divider />
                <div className="px-4 d-none d-md-block">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <input
                        type="text"
                        className="form-control my-3"
                        placeholder="Search..."
                      />
                    </div>
                  </div>
                </div>
                <Link
                  to="/oneChat"
                  className="list-group-item list-group-item-action border-0"
                >
                  <div className="badge bg-success float-right text-start">
                    1
                  </div>
                  <div className="d-flex align-items-start text-start">
                    <img
                      src={photo1}
                      className="rounded-circle mr-1"
                      alt="Edmilson Kayce"
                      width="40"
                      height="40"
                    />
                    <div className="flex-grow-1 ml-3 ms-3 text-success">
                      Edmilson Kayce
                      <div className="small">
                        <span className="fas fa-circle chat-online"></span>
                        Mas é essencial que resolvamos...
                      </div>
                    </div>
                  </div>
                </Link>
                <Divider />
                <Link
                  to="/oneChat"
                  className="list-group-item list-group-item-action border-0 "
                >
                  <div className="badge bg-success float-right text-end text-end">
                    5
                  </div>
                  <div className="d-flex align-items-start text-start">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar5.png"
                      className="rounded-circle mr-1"
                      alt="Vanessa Tucker"
                      width="40"
                      height="40"
                    />
                    <div className="flex-grow-1 ml-3 ms-3">
                      Vanessa Tucker
                      <div className="small">
                        <span className="fas fa-circle chat-online">
                          Online
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Divider />

                <Link
                  to="/oneChat"
                  className="list-group-item list-group-item-action border-0"
                >
                  <div className="badge bg-success float-right text-start">
                    2
                  </div>
                  <div className="d-flex align-items-start text-start">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      className="rounded-circle mr-1"
                      alt="William Harris"
                      width="40"
                      height="40"
                    />
                    <div className="flex-grow-1 ml-3 ms-3">
                      William Harris
                      <div className="small">
                        <span className="fas fa-circle chat-online">
                          Online
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Divider />

                <Link
                  to="/oneChat"
                  className="list-group-item list-group-item-action border-0"
                >
                  <div className="d-flex align-items-start text-start">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar4.png"
                      className="rounded-circle mr-1"
                      alt="Christina Mason"
                      width="40"
                      height="40"
                    />
                    <div className="flex-grow-1 ml-3 ms-3">
                      Christina Mason
                      <div className="small">
                        <span className="fas fa-circle chat-offline">
                          Offline
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </Link>
                <Divider />

                <Link
                  to="/oneChat"
                  className="list-group-item list-group-item-action border-0"
                >
                  <div className="d-flex align-items-start text-start">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar5.png"
                      className="rounded-circle mr-1"
                      alt="Fiona Green"
                      width="40"
                      height="40"
                    />
                    <div className="flex-grow-1 ml-3 ms-3">
                      Fiona Green
                      <div className="small">
                        <span className="fas fa-circle chat-offline">
                          Offline
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </Link>
                <Divider />

                <Link
                  to="/oneChat"
                  className="list-group-item list-group-item-action border-0"
                >
                  <div className="d-flex align-items-start text-start">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      className="rounded-circle mr-1"
                      alt="Doris Wilder"
                      width="40"
                      height="40"
                    />
                    <div className="flex-grow-1 ml-3 ms-3">
                      Doris Wilder
                      <div className="small">
                        <span className="fas fa-circle chat-offline">
                          Offline
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </Link>
                <Divider />

                <Link
                  to="/oneChat"
                  className="list-group-item list-group-item-action border-0"
                >
                  <div className="d-flex align-items-start text-start">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar4.png"
                      className="rounded-circle mr-1"
                      alt="Haley Kennedy"
                      width="40"
                      height="40"
                    />
                    <div className="flex-grow-1 ml-3 ms-3">
                      Haley Kennedy
                      <div className="small">
                        <span className="fas fa-circle chat-offline">
                          Offline
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </Link>
                <Divider />

                <Link
                  to="/oneChat"
                  className="list-group-item list-group-item-action border-0"
                >
                  <div className="d-flex align-items-start text-start">
                    <img
                      src={photo1}
                      className="rounded-circle mr-1"
                      alt="Jennifer Chang"
                      width="40"
                      height="40"
                    />
                    <div className="flex-grow-1 ml-3 ms-3">
                      Jennifer Chang
                      <div className="small">
                        <span className="fas fa-circle chat-offline">
                          Offline
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </Drawer>
          </Hidden>
        </nav>
      )}

      <main className={classes.content}>
        <div className={classes.toolbar} />

        <div className="position-relative">
          <div className="chat-messages p-4">
            <div className="chat-message-right pb-4">
              <div>
                <img
                  src={avatar}
                  className="rounded-circle mr-1"
                  alt="Chris Wood"
                  width="40"
                  height="40"
                />
                <div className="text-muted small text-nowrap mt-2">2:33 am</div>
              </div>
              <div className="flex-shrink-1 bg-warning rounded py-2 px-3 mr-3 text-start">
                <div className=" fw-bold mb-1">You</div>
                Olá, boa tarde!
              </div>
            </div>

            <div className="chat-message-left pb-4">
              <div>
                <img
                  src={photo1}
                  className="rounded-circle mr-1"
                  alt="Edmilson Kayce"
                  width="40"
                  height="40"
                />
                <div className="text-muted small text-nowrap mt-2">2:34 am</div>
              </div>
              <div className="flex-shrink-1 bg-success rounded py-2 px-3 ml-3 text-start">
                <div className=" fw-bold mb-1">Edmilson Kayce</div>
                Boa tarde obrigada, como vai?
              </div>
            </div>

            <div className="chat-message-right mb-4">
              <div>
                <img
                  src={avatar}
                  className="rounded-circle mr-1"
                  alt="Chris Wood"
                  width="40"
                  height="40"
                />
                <div className="text-muted small text-nowrap mt-2">2:35 am</div>
              </div>
              <div className="flex-shrink-1 bg-warning rounded py-2 px-3 mr-3 text-start">
                <div className=" fw-bold mb-1">You</div>
                Muito bem e você querida?
              </div>
            </div>

            <div className="chat-message-left pb-4">
              <div>
                <img
                  src={photo1}
                  className="rounded-circle mr-1"
                  alt="Edmilson Kayce"
                  width="40"
                  height="40"
                />
                <div className="text-muted small text-nowrap mt-2">2:36 am</div>
              </div>
              <div className="flex-shrink-1 bg-success rounded py-2 px-3 ml-3 text-start">
                <div className=" fw-bold mb-1">Edmilson Kayce</div>
                Também, tudo tranquilo!
              </div>
            </div>

            <div className="chat-message-left pb-4">
              <div>
                <img
                  src={photo1}
                  className="rounded-circle mr-1"
                  alt="Edmilson Kayce"
                  width="40"
                  height="40"
                />
                <div className="text-muted small text-nowrap mt-2">2:37 am</div>
              </div>
              <div className="flex-shrink-1 bg-success rounded py-2 px-3 ml-3 text-start">
                <div className=" fw-bold mb-1">Edmilson Kayce</div>
                Muito bom! Como vaia estadia aí em Marrocos!
              </div>
            </div>

            <div className="chat-message-right mb-4">
              <div>
                <img
                  src={avatar}
                  className="rounded-circle mr-1"
                  alt="Chris Wood"
                  width="40"
                  height="40"
                />
                <div className="text-muted small text-nowrap mt-2">2:38 am</div>
              </div>
              <div className="flex-shrink-1 bg-warning rounded py-2 px-3 mr-3 text-start">
                <div className=" fw-bold mb-1">You</div>
                Tudo tranquilo, apenas com tanto trabalho, que nunca falta, e
                aí?
              </div>
            </div>

            <div className="chat-message-left pb-4">
              <div>
                <img
                  src={photo1}
                  className="rounded-circle mr-1"
                  alt="Edmilson Kayce"
                  width="40"
                  height="40"
                />
                <div className="text-muted small text-nowrap mt-2">2:39 am</div>
              </div>
              <div className="flex-shrink-1 bg-success rounded py-2 px-3 ml-3 text-start">
                <div className=" fw-bold mb-1">Edmilson Kayce</div>
                Também, muito trabalho realmenye, para o ano, vou me mudar para
                aí também!
              </div>
            </div>

            <div className="chat-message-right mb-4">
              <div>
                <img
                  src={avatar}
                  className="rounded-circle mr-1"
                  alt="Chris Wood"
                  width="40"
                  height="40"
                />
                <div className="text-muted small text-nowrap mt-2">2:40 am</div>
              </div>
              <div className="flex-shrink-1 bg-warning rounded py-2 px-3 mr-3 text-start">
                <div className=" fw-bold mb-1">You</div>
                Waww! Interessante, espero por você então!
              </div>
            </div>

            <div className="chat-message-right mb-4">
              <div>
                <img
                  src={avatar}
                  className="rounded-circle mr-1"
                  alt="Chris Wood"
                  width="40"
                  height="40"
                />
                <div className="text-muted small text-nowrap mt-2">2:41 am</div>
              </div>
            </div>

            <div className="chat-message-left pb-4">
              <div>
                <img
                  src={photo1}
                  className="rounded-circle mr-1"
                  alt="Edmilson Kayce"
                  width="40"
                  height="40"
                />
                <div className="text-muted small text-nowrap mt-2">2:42 am</div>
              </div>
              <div className="flex-shrink-1 bg-success rounded py-2 px-3 ml-3 text-start">
                <div className=" fw-bold mb-1">Edmilson Kayce</div>
                Sed pulvinar, massa vitae interdum pulvinar, risus lectus
                porttitor magna, vitae commodo lectus mauris et velit. Proin
                ultricies placerat imperdiet. Morbi varius quam ac venenatis
                tempus.
              </div>
            </div>

            <div className="chat-message-right mb-4">
              <div>
                <img
                  src={avatar}
                  className="rounded-circle mr-1"
                  alt="Chris Wood"
                  width="40"
                  height="40"
                />
                <div className="text-muted small text-nowrap mt-2">2:43 am</div>
              </div>
              <div className="flex-shrink-1 bg-warning rounded py-2 px-3 mr-3 text-start">
                <div className=" fw-bold mb-1">You</div>
                Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                prodesset te vix.
              </div>
            </div>

            <div className="chat-message-left pb-4">
              <div>
                <img
                  src={photo1}
                  className="rounded-circle mr-1"
                  alt="Edmilson Kayce"
                  width="40"
                  height="40"
                />
                <div className="text-muted small text-nowrap mt-2">2:44 am</div>
              </div>
              <div className="flex-shrink-1 bg-success rounded py-2 px-3 ml-3 text-start">
                <div className=" fw-bold mb-1">Edmilson Kayce</div>
                Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat
                animal commodo.
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow-0 py-3 px-4 border-top">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Type your message"
            />
            <button className="btn btn-primary">Send</button>
          </div>
        </div>
      </main>
    </div>
  );
}

AllChats.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AllChats;

/* {/* The implementation can be swapped with js to avoid SEO duplication of links. *
<Hidden smUp implementation="css">
<Drawer
  container={container}
  variant="temporary"
  anchor={theme.direction === "rtl" ? "right" : "left"}
  open={mobileOpen}
  onClose={handleDrawerToggle}
  classes={{
    paper: classes.drawerPaper,
  }}
  ModalProps={{
    keepMounted: true, // Better open performance on mobile.
  }}
>
  <div>
    <LinkppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Responsive drawer
        </Typography>
      </Toolbar>
    </AppBar>
    <div className={classes.toolbar} />
    <Divider />
    <List>
      {["Inbox", "Starred", "Send email", "Drafts"].map(
        (text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        )
      )}
    </List>
    <Divider />
    <List>
      {["All mail", "Trash", "Spam"].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </div>
</Drawer>
</Hidden> */
