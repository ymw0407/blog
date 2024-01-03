import { BlogName } from "@/components/atoms/blogName";
import { ProfileImage } from "@/components/atoms/profileImage";
import { CategoryList } from "@/components/atoms/categoryList";

export const AppBar = ({
  blogName,
  profileImageURL,
  categories,
}: {
  blogName: string;
  profileImageURL: string;
  categories: string[];
}) => {
  return (
    <span className="flex h-14 items-center justify-between shadow-xl">
      <div className="px-10">
        <BlogName blogName={blogName}></BlogName>
      </div>
      <div className="flex items-center">
        <div className="flex items-center">
          <CategoryList
            categories={categories}
            className="pr-10"
          ></CategoryList>
        </div>
        <div className="pr-5">
          <ProfileImage profileImageURL={profileImageURL}></ProfileImage>
        </div>
      </div>
    </span>
  );
};
