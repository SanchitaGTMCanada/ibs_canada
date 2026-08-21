import ServicePage from "@/components/services/ServicePage";
import { serviceData } from "@/components/services/serviceData";

export default function GovernancePage() {
  return (
    <ServicePage
      data={serviceData.governance}
    />
  );
}