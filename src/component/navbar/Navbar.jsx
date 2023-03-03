import 
{Container,Box , Toolbar , Typography , AppBar 
} from '@mui/material'
function Navbar() {
    return ( 
        <div className="nav">
            {/* <Container> */}
            <Box sx={{ flexGrow: 3 }}>
      <AppBar position="static">
      <Container>
        <Toolbar>
            <Typography variant="h5" component="span"  sx={{ flexGrow: 1 }}>
            Weather App
          </Typography> 
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
        </div>
     );
}

export default Navbar;