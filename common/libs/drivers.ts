import { DriveStep, driver } from "driver.js";
import "driver.js/dist/driver.css";

interface CreateDriversProps {
  steps: DriveStep[];
}

export default function createDrivers({ steps }: CreateDriversProps) {
  const driverObj = driver({
    showProgress: true,
    animate: true,
    steps,
  });

  let isProductTour = false;

  if (typeof window !== "undefined") {
    isProductTour = !(window.localStorage.getItem("cb-product-tour") !== null);
  }

  function runDriver() {
    driverObj?.drive();

    window.localStorage.setItem("cb-product-tour", "true");
  }
  return { runDriver, isProductTour };
}
