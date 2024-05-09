import Button from "@mui/material/Button";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import UserManual from '../../public/pouzivatelska_prirucka.pdf';

export default function InputFileUpload() {
  return (
    <Button
      href={UserManual}
      download="User-Manual"
      rel="noreferrer"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudDownloadIcon />}
    >
      User Manual
    </Button>
  );
}
