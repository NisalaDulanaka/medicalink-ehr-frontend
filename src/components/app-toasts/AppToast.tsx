import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { createContext, useContext, useState } from "react";

interface ToastContextProps {
  showSuccessToast: (title: string, message: string) => void;
  showErrorToast: (title: string, message: string) => void;
  hideToast: () => void;
  isToastDisplayed: boolean;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

interface ToastContextProviderProps {
  children: React.ReactNode;
  className?: string;
}

export const useToasts = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("Should be used inside of a toast context provider");
    }
    return context;
}

const AppSection: React.FC<ToastContextProviderProps> = ({
  children,
  className,
}) => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [toastProps, setToastProps] = useState<{
    title: string;
    message: string;
    toastType: "success" | "error";
  }>({
    title: "",
    message: "",
    toastType: "success",
  });

  const showSuccessToast = (title: string, message: string) => {
    setToastProps({
      title,
      message,
      toastType: "success",
    });
    if (!isDisplayed) {
        setIsDisplayed(true);
    }
  };

  const showErrorToast = (title: string, message: string) => {
    setToastProps({
      title,
      message,
      toastType: "error",
    });
    if (!isDisplayed) {
        setIsDisplayed(true);
    }
  };

  return (
    <ToastContext.Provider
      value={{
        showSuccessToast,
        showErrorToast,
        hideToast: () => setIsDisplayed(false),
        isToastDisplayed: isDisplayed,
      }}
    >
      <section className={className}>
        {children}
        <Snackbar
          open={isDisplayed}
          onClose={() => setIsDisplayed(false)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          autoHideDuration={5000}
        >
          <Alert
            onClose={() => setIsDisplayed(false)}
            severity={toastProps.toastType}
            variant="filled"
            className="w-full md:w-auto md:min-w-[400px]"
          >
            <AlertTitle>{toastProps.title}</AlertTitle>
            {toastProps.message}
          </Alert>
        </Snackbar>
      </section>
    </ToastContext.Provider>
  );
};

export default AppSection;
