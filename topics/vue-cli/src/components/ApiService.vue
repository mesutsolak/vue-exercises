<script>
 
import apiService from '../assets/js/apiService'

export default{
    methods:{
        GetProductAll(){
            return apiService.get();
        }
    }
}

</script>
