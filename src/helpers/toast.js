import { toast as ReactToast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastInfo = (label) => ReactToast.info(label);

const toastSuccess = (label) => ReactToast.success(label);

const toastError = (label) => ReactToast.error(label);

const toastWarning = (label) => ReactToast.warning(label);

export { toastError, toastInfo, toastSuccess, toastWarning };
