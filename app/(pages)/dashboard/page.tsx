import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import MaxWidthWrapper from "../../_components/MaxWidthWrapper";
import { redirect } from "next/navigation";
import { db } from "../../../db";
import DashboardDetailPage from "../../_components/DashboardDetailPage";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = async ({}) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || !user.id) {
    redirect("/auth-callback?origin=dashboard");
  }

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    redirect("/auth-callback?origin=dashboard");
  }
  return (
    <MaxWidthWrapper>
      {" "}
      <DashboardDetailPage />
    </MaxWidthWrapper>
  );
};
export default Dashboard;
