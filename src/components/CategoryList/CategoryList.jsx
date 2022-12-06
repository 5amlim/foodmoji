import './CategoryList.css';

export default function CategoryList({ categories, activeCategory, setActiveCategory }) {
  const categoryCard = categories.map(category =>
    <li
      key={category}
      className={category === activeCategory ? 'active' : ''}
      onClick={() => setActiveCategory(category)}
    >
      {category}
    </li>
  );
  return (
    <ul className="CategoryList">
        <h2 className="align-ctr">Category</h2>
        {categoryCard}
    </ul>
  );
}