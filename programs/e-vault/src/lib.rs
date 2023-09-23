use anchor_lang::prelude::*;

declare_id!("8CfypLbwEu87YxT54Jcjx3SEXLqpiHAmjmyKb86o5iHW");

#[program]
pub mod e_vault {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
