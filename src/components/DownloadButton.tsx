import Button from "@mui/material/Button";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import UserManual from '../../public/user-manual.pdf';

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
      Používateľská príručka
    </Button>
  );
}
