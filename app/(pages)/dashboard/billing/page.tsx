import { getUserSubscriptionPlan } from "../../../../lib/stripe";
import BillingForm from "../../../_components/BillingForm";

interface BillingProps {}

const Billing: React.FC<BillingProps> = async ({}) => {
  const subscriptionPlan = await getUserSubscriptionPlan();

  return <BillingForm subscriptionPlan={subscriptionPlan} />;
};

export default Billing;
