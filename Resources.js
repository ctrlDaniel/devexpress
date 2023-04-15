import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { StyledDiv, classes } from './StyledDiv';


const ResourceSwitcher = (
    ({
      mainResourceName, onChange, resources,
    }) => (
      <StyledDiv className={classes.container}>
        <div className={classes.text}>
          Main resource name:
        </div>
        <Select
          variant="standard"
          value={mainResourceName}
          onChange={e => onChange(e.target.value)}
        >
          {resources.map(resource => (
            <MenuItem key={resource.fieldName} value={resource.fieldName}>
              {resource.title}
            </MenuItem>
          ))}
        </Select>
      </StyledDiv>
    )
  );

  export default ResourceSwitcher