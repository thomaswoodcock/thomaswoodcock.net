/** @jsxImportSource @emotion/react */
import Box from "../Box";
import Button from "../Button";
import Heading from "../Heading";

import { createStyles } from "../../styles";
import { ErrorBoundaryState } from "../../containers/ErrorBoundary";

const useStyles = createStyles((theme) => ({
  button: {
    marginTop: theme.sizing.getSize(1),
  },
  heading: {
    fontSize: theme.sizing.getSize(5),
  },
}));

export interface ErrorStateProps {
  error?: ErrorBoundaryState["error"];
  resetError?: () => void;
}

const ErrorState = ({ resetError }: ErrorStateProps) => {
  const styles = useStyles();

  return (
    <Box variant="centralized">
      <Heading css={styles.heading} level={1}>
        Error
      </Heading>
      <Heading level={2}>Something went wrong.</Heading>
      <Button css={styles.button} onClick={resetError}>
        Reload
      </Button>
    </Box>
  );
};

export default ErrorState;
