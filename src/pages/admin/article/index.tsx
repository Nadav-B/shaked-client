import {useQuery} from "@apollo/client";
import {GetArticles} from "../../../graphql/__generated__/GetArticles";
import query from "../../../graphql/GetArticles.graphql";
import styled from '@emotion/styled';
import Flex from "../../../elements/Flex";
import Button from "../../../elements/Button";
import {useRouter} from "next/router";

const ArticleSelector = () => {
    const {data, loading, error} = useQuery<GetArticles>(query);
    const router = useRouter();

    const handleChange = (event) => {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        router.push(`article/${value}`)
    };
    return (
        <Flex flexDirection="column" margin={"20px"}>

            <StyledSelect name="category" onChange={handleChange}>
                <option value=""> ערוך כתבה</option>
                {data &&
                    data.articles.map((article) => (
                        <option key={article.id} value={article.id}>

                            {article.title}
                        </option>
                    ))}
            </StyledSelect>
            <Button>הוסף כתבה</Button>
        </Flex>
    );
};


const StyledSelect = styled.select`
        display: block;
        width: 100%;
        margin: auto;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        height: 40px;
        `;


export default ArticleSelector;
