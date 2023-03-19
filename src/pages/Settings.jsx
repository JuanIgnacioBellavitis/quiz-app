import { Button, CircularProgress, Typography } from '@mui/material';
import { SelectFields } from '../components/SelectFields';
import {TextFieldComponent} from '../components/TextFieldComponent'
import { Box } from '@mui/system'
import { useAxios } from '../hooks/useAxios';
import { useNavigate } from 'react-router';

const Settings = () => {
    const {response, error, loading } = useAxios({url: "/api_category.php"})
    const navigate = useNavigate()

    if(loading){
        return (
            <Box mt={20}>
                <CircularProgress/>
            </Box>
        );
    }

    if(error){
        <Typography variant='h6' mt={20} color='red'>
            Some went Wrong!
        </Typography>
    }

    const difficultyOptions =[
        {id: "easy", name: "Easy"},
        {id: "medium", name: "Medium"},
        {id: "hard", name: "Hard"}
    ]

    const typeOptions = [
        {id: "multiple", name: "Multiple Choice"},
        {id: "boolean", name: "True/False"},
    ]

    const handleSubmit = e => {
        e.preventDefault();
        navigate("/questions")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <SelectFields label="Category" options={response.trivia_categories}/>
                <SelectFields label="Difficulty" options={difficultyOptions}/>
                <SelectFields label="Type" options={typeOptions}/>
                <TextFieldComponent /> 
                <Box mt={3} width="100%">
                    <Button fullWidth variant="contained" type='submit'>Get Started</Button>
                </Box>
            </form>
        </div>
    )
}

export default Settings