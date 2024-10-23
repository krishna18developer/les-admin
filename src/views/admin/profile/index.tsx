// Chakra imports
import { Box, Grid } from '@chakra-ui/react';

// Custom components
import Banner from 'views/admin/profile/components/Banner';
import General from 'views/admin/profile/components/General';
import Notifications from 'views/admin/profile/components/Notifications';
import Projects from 'views/admin/profile/components/Projects';
import Storage from 'views/admin/profile/components/Storage';
import Upload from 'views/admin/profile/components/Upload';

// Assets
import banner from 'assets/img/auth/banner.png';
import avatar from 'assets/img/avatars/avatar4.png';
import { useEffect, useRef, useState } from 'react';
import { GetUser, User } from 'api/users';

export default function Overview() {
		
	const defaultUser = useRef<User>({
	  id: "",
	  Name: "",
	  Username: "",
	  Password: "",
	  Email: "",
	  Role: "",
	  Year: -1,
	  Branch: "",
	  Section: "",
	  Department: "",
	});
	const [user, setUser] = useState<User>(defaultUser.current); // Initialize with defaultUser

	useEffect(() => {
	  const fetchUser = async () => {
		try {
		  const userId = localStorage.getItem("user_id");
		  if (userId) {
			const result = await GetUser(userId);
			setUser(result || defaultUser.current);
			console.log("User fetched:", result);
		  } else {
			setUser(defaultUser.current);
			console.log("No user ID found in localStorage");
		  }
		} catch (error) {
		  console.error("Error fetching user:", error);
		  setUser(defaultUser.current);
		}
	  };
	
	  fetchUser();
	}, []);
	

	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			{/* Main Fields */}
			<Grid
				templateColumns={{
					base: '1fr',
					lg: '1.34fr 1fr 1.62fr'
				}}
				templateRows={{
					base: 'repeat(3, 1fr)',
					lg: '1fr'
				}}
				gap={{ base: '20px', xl: '20px' }}>
				<Banner
					gridArea='1 / 1 / 2 / 2'
					banner={banner}
					avatar={avatar}
					name= {user.Name}
					job={user.Role}
				/>
				<Storage gridArea={{ base: '2 / 1 / 3 / 2', lg: '1 / 2 / 2 / 3' }} used={25.6} total={50} />
				<Upload
					gridArea={{
						base: '3 / 1 / 4 / 2',
						lg: '1 / 3 / 2 / 4'
					}}
					minH={{ base: 'auto', lg: '420px', '2xl': '365px' }}
					pe='20px'
					pb={{ base: '100px', lg: '20px' }}
				/>
			</Grid>
			<Grid
				mb='20px'
				templateColumns={{
					base: '1fr',
					lg: 'repeat(2, 1fr)',
					'2xl': '1.34fr 1.62fr 1fr'
				}}
				templateRows={{
					base: '1fr',
					lg: 'repeat(2, 1fr)',
					'2xl': '1fr'
				}}
				gap={{ base: '20px', xl: '20px' }}>
				<Projects
					banner={banner}
					avatar={avatar}
					name='Adela Parkson'
					job='Product Designer'
					posts='17'
					followers='9.7k'
					following='274'
				/>
				<General gridArea={{ base: '2 / 1 / 3 / 2', lg: '1 / 2 / 2 / 3' }} minH='365px' pe='20px' />
				<Notifications
					used={25.6}
					total={50}
					gridArea={{
						base: '3 / 1 / 4 / 2',
						lg: '2 / 1 / 3 / 3',
						'2xl': '1 / 3 / 2 / 4'
					}}
				/>
			</Grid>
		</Box>
	);
}
