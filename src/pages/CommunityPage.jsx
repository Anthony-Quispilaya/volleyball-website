import CreatePost from '../components/CreatePost'
import FeedPost from '../components/FeedPost'

export function CommunityPage() {
    return (
        <div className="flex h-full">
            <div className="flex items-center flex-col gap-5">
                <CreatePost />
                <FeedPost />
            </div>
        </div>
    );
}

export default CommunityPage;