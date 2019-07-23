import paths from '../../config/paths';

const isSelected = (currentPathName, componentPath) => {
  const isRootPath =
    componentPath === paths.inbox && currentPathName === paths.root;
  return componentPath === currentPathName || isRootPath;
};

export default isSelected;
