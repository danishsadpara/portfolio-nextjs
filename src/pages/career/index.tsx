import { Box, Chip, Divider, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { academicData, professionalData } from "./data";
import Professional from "./professional";
import Academic from "./academic";

const Career = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} textAlign="center">
        <Chip label="Career" />

        <Typography variant="h3" fontWeight="bold" mt={2}>
          Education & Experience
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Professional
          professionalData={professionalData}
          title="Professional Area"
        />
      </Grid>

      <Grid item xs={12}>
        <Academic academicData={academicData} title="Academic Area" />
      </Grid>
    </Grid>
  );
};

export default Career;
