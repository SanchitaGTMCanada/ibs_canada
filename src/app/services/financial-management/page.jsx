import ServicePage from "@/components/services/ServicePage";
import { serviceData } from "@/components/services/serviceData";

export default function FinancialManagementPage() {
  return (
    <ServicePage
      data={serviceData.financialManagement}
    />
  );
}