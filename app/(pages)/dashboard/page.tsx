import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import MaxWidthWrapper from "../../_components/MaxWidthWrapper";
import { redirect } from "next/navigation";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = async ({}) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || !user.id) {
    redirect("/auth-callback?origin=dashboard");
  }
  return <MaxWidthWrapper>{user?.email}</MaxWidthWrapper>;
};
export default Dashboard;
