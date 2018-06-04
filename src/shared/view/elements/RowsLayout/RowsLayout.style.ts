import { withStyles, WithStyles } from '@material-ui/core/styles';
import { GetClassKey } from 'shared/types/app';
import { rule } from 'shared/helpers/style';

const styles = {
  root: rule({
    flexGrow: 1,
    minHeight: '100%',
  }),
  content: rule({
    flexGrow: 1,
  }),
};

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<GetClassKey<typeof styles>>;
