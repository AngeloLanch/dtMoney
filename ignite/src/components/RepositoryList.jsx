import RepositoryItem from './RepositoryItem';

const repositoryInfos = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform',
};

export function RepositoryList() {
  return (
    <section>
      <h1></h1>
      <ul>
        <RepositoryItem repository={repositoryInfos} />
        <RepositoryItem repository={repositoryInfos} />
        <RepositoryItem repository={repositoryInfos} />
        <RepositoryItem repository={repositoryInfos} />
      </ul>
    </section>
  );
}
