import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";




function Header() {
  const user = JSON.parse(localStorage.getItem("user"));console.log("Header component rendered");
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    console.log(user);
  }, []);

    // login
    const login = useGoogleLogin({
      onSuccess: (codeResp) => GetUserProfile(codeResp),
      onError: (error) => console.log(error),
    });

  //  getting user details
  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        window.location.reload()
      });
  };

// const handleLogo = ()=>{
//   window.location.reload()
// }

  return (
    <div className="p-3 shadow-sm flex justify-between items-center">
      <img src="/logo.svg" 
        alt="Logo" 
        style={{ cursor: "pointer" }} />
      <div>{user ? 
        <div className='flex items-center gap-3'>
          <a href='/create-trip'>
          <Button variant='outline' className='rounded-full'>+Create Trip</Button>
          </a>
          <a href='/my-trips'>
          <Button variant='outline' className='rounded-full'>My Trip</Button>
          </a>
          <Popover>
            <PopoverTrigger>
             <img src={user?.picture} className='h-[35px] w-[35px] rounded-full'/>
            </PopoverTrigger>
            <PopoverContent>
              <h2
              className='cursor-pointer' 
              onClick={()=>{
                googleLogout();
                localStorage.clear();
                window.location.reload();
              }}>LogOut</h2>
            </PopoverContent>
          </Popover>

        </div> 
        : <Button onClick={()=>setOpenDialog(true)}>Sign In</Button>}
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" />
              <h2 className="font-bold text-lg mt-7">Sign In With Google</h2>
              <p>Sign In to the App with Google Authentication securely</p>
              <Button
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center"
              >
                <FcGoogle className="h-7 w-7" />
                Sign In with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
// 3hr : 3 min
export default Header;
