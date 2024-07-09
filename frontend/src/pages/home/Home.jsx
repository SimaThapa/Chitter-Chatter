import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex sm:h-[600px] md:h-[650px] rounded-lg overflow-hidden bg-purple-500 '>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
