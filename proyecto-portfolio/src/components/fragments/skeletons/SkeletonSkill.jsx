const SkeletonSkill = () => {
    return (
    <div role="status" className="animate-pulse py-6 px-4">
        <div className="h-4 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
        <div className="mt-4 pt-4">
            <div className="mb-4 w-20 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <span className="sr-only">Loading...</span>
    </div>
    );
}

export default SkeletonSkill;